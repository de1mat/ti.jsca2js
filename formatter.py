#!/usr/bin/env python

__author__ = "Navin Peiris"
__copyright__ = "Copyright 2011, Navin Peiris. All rights reserved."
__email__ = "navinpeiris@gmail.com"
__status__ = "Development"

class Formatter:
    def __init__(self, indentation=0):
        self.indent = ' ' * indentation
        self.result = ''

    def add(self, *args):
        self.result += ''.join(args)
        return self

    def addLine(self, *args):
        return self.add(self.indent).add(''.join([str(i) for i in args])).newLine()

    def newLine(self):
        return self.add('\n')

    def getResult(self):
        return self.result