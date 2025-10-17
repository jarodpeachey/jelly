const fs = require('fs');
const path = require('path');
const dir = path.resolve('./src/content/posts');
if(!fs.existsSync(dir)){
  console.error('posts dir not found',dir);
  process.exit(1);
}
fs.readdirSync(dir).filter(f => f.endsWith('.md')).forEach(f => {
  const c = fs.readFileSync(path.join(dir,f),'utf8');
  const normalized = c.replace(/\r\n/g, '\n');
  const m = normalized.match(/^---\n([\s\S]*?)\n---/);
  if(m){
  const fmLines = m[1].split('\n');
    const fm = {};
    fmLines.forEach(line => {
      const idx = line.indexOf(':');
      if(idx>0){
        const k = line.slice(0,idx).trim();
        const v = line.slice(idx+1).trim().replace(/^"|"$/g,'');
        fm[k]=v;
      }
    })
    console.log('post file',f,'slug:',fm.slug||fm.title);
  } else {
    console.log('no frontmatter',f);
  }
});
