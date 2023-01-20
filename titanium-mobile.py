#!/usr/bin/env python

__author__ = "Navin Peiris"
__copyright__ = "Copyright 2011, Navin Peiris. All rights reserved."
__email__ = "navinpeiris@gmail.com"
__status__ = "Development"

import re
import sys
import urllib
import json
import os.path
from jsca2js import convertJsca2Js

DEFAULT_HTTP_TIMEOUT_SECS = 10

TITANIUM_VERSION_REGEX = re.compile('\d\.\d\.\d')


def retrieveJsca(path, version):
    localfile = path + '/api.jsca'

    print('Retrieving Titanium JSCA API for version: ' + version)

    try:
        if not os.path.isfile(localfile):
            sys.stderr.write("ERROR: Cannot locate the installed SDK at " + localfile)
            sys.exit(1)

        file = open(localfile, 'r')
        content = file.read()
        file.close()

        return json.JSONDecoder().decode(content)
    except Exception as e:
        errStr = version + ' was not found'

        raise Exception(errStr)


def writeJsFile(content, filepath):
    try:
        file = open(filepath, 'w')
        file.write(content)
        file.close()
    except IOError:
        raise Exception('Unable to write JavaScript to ' + filepath)


def errorExit(message=None):
    if message:
        sys.stderr.write(message + '\n')
    sys.exit(1)


def main():
    if len(sys.argv) < 2 or len(sys.argv) > 3:
        errorExit('USAGE: ' + sys.argv[0] + ' <path-to-local-sdk>')

    path = sys.argv[1]

    # get last part of the path
    version = path.split('/')[-1];

    try:
        jsca = retrieveJsca(path, version)
    except Exception as e:
        errorExit(str(e))

    print('Converting API to JavaScript')
    javascript = convertJsca2Js(jsca, version)

    outputFilePath = 'titanium-js/titanium-mobile-' + version + '.js'
    print('Writing JavaScript to file: ' + outputFilePath)
    writeJsFile(javascript, outputFilePath)


if __name__ == '__main__':
    # try:
    main()
    print('Conversion completed successfully')
# except Exception as e:
#    print('ERROR: ' + e.message)
#    sys.exit(1)
