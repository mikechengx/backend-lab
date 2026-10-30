'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
for(const[i,m]of scripts.entries())new vm.Script(m[1],{filename:'index.html#script-'+(i+1)});
const markup=html.replace(/<script>[\s\S]*?<\/script>/g,'').replace(/<style>[\s\S]*?<\/style>/g,'');
const ids=[...markup.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
const duplicate=ids.filter((id,i)=>ids.indexOf(id)!==i);if(duplicate.length)throw Error('Duplicate static IDs: '+duplicate.join(', '));
for(const id of ['start','principles','flow','architecture','lab','debug','depth','toolbox','cli','expected-command','command-input'])if(!ids.includes(id))throw Error('Missing UI: '+id);
for(const doc of ['README.md','README.zh-CN.md']){const text=fs.readFileSync(path.join(root,doc),'utf8');for(const m of text.matchAll(/\]\(([^)]+)\)/g)){if(/^(?:https?:|#)/.test(m[1]))continue;if(!fs.existsSync(path.resolve(root,m[1])))throw Error('Broken documentation link: '+m[1])}}
const suites=JSON.parse(fs.readFileSync(path.join(root,'tests/browser-cases.json'),'utf8'));for(const suite of suites)new vm.Script(suite.expression,{filename:suite.name});
if(/\/home\/chengyuanx|\/tmp\/codex-clipboard/.test(html))throw Error('Local workstation path in app');
console.log('PASS: '+scripts.length+' scripts, '+ids.length+' unique IDs, bilingual documentation links, '+suites.length+' browser suites.');
