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

def extract_blanks(content):
    inline = re.compile('[^:]::([^:]*?)(?:\n|$)')
    blank = re.compile('(__\S.*?\S__)')
    multiline = re.compile('[^:]:::((?:\s(?!___).*)*)')
    results = []
    for card in [i.strip() for i in content.split('\n\n')]:
        for pattern in (inline, blank, multiline):
            results.extend(pattern.findall(card))
    results.sort()
    return results
