import re

def extract_title(content):
    pattern = r'%title:(.*?)$|\n'
    results = re.search(pattern,content,re.MULTILINE|re.DOTALL)
    try:
        return  results.groups()[0].strip()
    except:
        pattern = r'# (.*?)$|\n'
        results = re.search(pattern,content,re.MULTILINE|re.DOTALL)
        try:
            return results.groups()[0].strip()
        except:
            return 'Untitled'

def extract_links(content):
    pattern = r'\(VID=(\d+)\)'
    results = re.findall(pattern,content,re.MULTILINE)
    return results
