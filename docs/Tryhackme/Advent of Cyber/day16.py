#!/usr/bin/python
# -*- coding: utf-8 -*-import sys
import os
import sys
import zipfile
import exiftool
from pprint import pprint

def extract_files(pathfile, pathtoextract):
    extracted = []
    with zipfile.ZipFile(pathfile, 'r') as zip_ref:
        zip_ref.extractall(pathtoextract)
    listOfFiles = os.listdir(pathtoextract)
    for file in listOfFiles:
        absfile = os.path.join(pathtoextract, file)
        (body, ext) = os.path.splitext(absfile)
        if ext == '.zip':
            os.mkdir(body)
            extracted += extract_files(absfile, body)
            os.remove(absfile)
        else:
            extracted.insert(0, absfile)
    return extracted

def count_version(files, version):
    m_count = 0
    with exiftool.ExifTool() as et:
        for file in files:
            metadata = et.get_metadata(file)
            try:
                if metadata['XMP:Version'] == version:
                    m_count = m_count + 1
            except:
                continue

    return m_count

def check_password(files):
    for file in files:
        try:
            with open(file, 'r') as reader:
                data = reader.read()
                if 'password' in data:
                    print file
        except:
            continue

def main():
    if len(sys.argv) != 3:
        print 'Usage: pythonscript pathfile pathtoextract'
    else:
        pathfile = sys.argv[1]
        pathtoextract = sys.argv[2]
        extracted = extract_files(pathfile, pathtoextract)
        print len(extracted)
        print count_version(extracted, 1.1)
        check_password(extracted)

main()
