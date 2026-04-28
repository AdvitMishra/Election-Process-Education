// PARTICLES
const canvas=document.getElementById('particleCanvas'),ctx=canvas.getContext('2d');
function resizeCanvas(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
resizeCanvas();window.addEventListener('resize',resizeCanvas);
class Particle{constructor(){this.reset();}reset(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.size=Math.random()*2+.5;this.speedX=(Math.random()-.5)*.4;this.speedY=(Math.random()-.5)*.4;this.opacity=Math.random()*.5+.1;this.color=['#4f9eff','#6c63ff','#f5c518','#22d3a0'][Math.floor(Math.random()*4)];}update(){this.x+=this.speedX;this.y+=this.speedY;if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height)this.reset();}draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=this.color+Math.floor(this.opacity*255).toString(16).padStart(2,'0');ctx.fill();}}
const particles=[];for(let i=0;i<120;i++)particles.push(new Particle());
function animateP(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw();});requestAnimationFrame(animateP);}animateP();
// NAV
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>30));
document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
// STEPS
const STEPS=[
  {num:'01',icon:'📣',title:'Election Announcement',desc:'The Election Commission officially announces dates, triggering the Model Code of Conduct immediately.'},
  {num:'02',icon:'📝',title:'Voter Registration',desc:'Citizens enroll or update electoral rolls. Voter ID cards issued to approved applicants.'},
  {num:'03',icon:'🏛️',title:'Candidate Nomination',desc:'Eligible citizens file nomination papers with security deposit and sworn affidavit of assets.'},
  {num:'04',icon:'✍️',title:'Scrutiny & Withdrawal',desc:'Nomination papers examined. Candidates may withdraw before deadline; final list published.'},
  {num:'05',icon:'📢',title:'Campaign Period',desc:'Parties campaign within MCC rules. Spending limits enforced. All ads must be pre-certified.'},
  {num:'06',icon:'🗳️',title:'Polling Day',desc:'Registered voters cast votes on EVMs at designated booths. VVPAT slips generated for audit.'},
  {num:'07',icon:'📊',title:'Vote Counting',desc:'Votes counted under observer supervision. Candidate agents present throughout counting.'},
  {num:'08',icon:'🏆',title:'Results & Oath',desc:'Winner declared, Certificate of Election issued. Elected representative sworn into office.'}
];
// TIMELINE
const TIMELINE=[
  {icon:'📅',label:'Announcement',duration:'Day 0',title:'Official Announcement',desc:'Election Commission issues gazette notification. MCC comes into force instantly.',points:['Gazette notification issued by ECI','Model Code of Conduct activated','Government policy announcements restricted','Media monitoring cells activated']},
  {icon:'📝',label:'Registration',duration:'Weeks 1-3',title:'Voter Registration & Rolls',desc:'Electoral rolls updated, new voters enrolled, Voter ID cards issued.',points:['Apply at voters.eci.gov.in or Voter Helpline app','Form 6 for new registration, Form 8 for corrections','BLO may visit to verify','EPIC cards issued after approval']},
  {icon:'🏛️',label:'Nomination',duration:'Week 3-4',title:'Candidate Nomination',desc:'Eligible citizens submit nomination papers with security deposit to the Returning Officer.',points:['Age 25+ for Lok Sabha, 30+ for Rajya Sabha','Security deposit Rs.25,000 (general)','Affidavit of assets & criminal record mandatory','Proposers from constituency must sign']},
  {icon:'✍️',label:'Scrutiny',duration:'+1-2 Days',title:'Scrutiny & Withdrawal',desc:'RO checks papers for completeness. Candidates may withdraw before the last date.',points:['Returning Officer examines all papers','Defects notified to candidates','Last date for withdrawal 2 days after scrutiny','Final candidate list published publicly']},
  {icon:'📢',label:'Campaign',duration:'3-4 Weeks',title:'Election Campaign',desc:'Candidates campaign under MCC rules. Expenditure capped and monitored.',points:['Spending limit: Rs.95 lakh per LS candidate','All paid ads must be pre-certified by ECI','48-hour silence period before polling','Exit polls banned until last phase ends']},
  {icon:'🗳️',label:'Polling',duration:'Polling Day',title:'Polling Day',desc:'Voters cast votes at booths using EVMs from 7 AM to 6 PM.',points:['Photo ID mandatory at booth','NOTA option available on EVM','VVPAT slip visible for 7 seconds','Security forces deployed at sensitive booths']},
  {icon:'📊',label:'Counting',duration:'Counting Day',title:'Vote Counting',desc:'Strong rooms opened, postal ballots counted first, EVM counts proceed round by round.',points:['Postal ballots counted before EVM votes','All candidate agents observe counting','RO announces leading tallies each round','CCTV monitored counting halls']},
  {icon:'🏆',label:'Result',duration:'Result Day',title:'Result Declaration',desc:'Winner declared by RO. Certificate of Election issued. Oath administered.',points:['RO formally declares winner','Certificate of Election issued','Winner files details with ECI','Oath administered by Speaker/President']}
];
// VOTER STATS
const STATE_DATA=[
  {state:'Uttar Pradesh',voters:'15.0 Cr',pct:100},
  {state:'Maharashtra',voters:'9.1 Cr',pct:61},
  {state:'West Bengal',voters:'7.5 Cr',pct:50},
  {state:'Bihar',voters:'7.4 Cr',pct:49},
  {state:'Tamil Nadu',voters:'6.2 Cr',pct:41},
  {state:'Rajasthan',voters:'5.2 Cr',pct:35},
  {state:'Karnataka',voters:'5.3 Cr',pct:35},
  {state:'Gujarat',voters:'4.9 Cr',pct:33}
];
const DONUT_DATA=[
  {label:'General Voters',value:48.5,color:'#4f9eff'},
  {label:'Women Voters',value:48.7,color:'#6c63ff'},
  {label:'Youth (18-25)',value:20.3,color:'#22d3a0'},
  {label:'Senior (60+)',value:12.8,color:'#f5c518'},
  {label:'PwD Voters',value:0.8,color:'#ff5b6b'}
];

// PARTIES WITH OFFICIAL LOGOS
const PARTIES=[
  {name:'Bharatiya Janata Party',abbr:'BJP',icon:'🪷',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/BJP_party_flag.png/100px-BJP_party_flag.png',alliance:'nda',leader:'Narendra Modi',founded:1980,seats:240,color:'#ff8c00',ideology:'Hindu Nationalism, Conservatism'},
  {name:'Indian National Congress',abbr:'INC',icon:'✋',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/100px-Indian_National_Congress_hand_logo.svg.png',alliance:'india',leader:'Mallikarjun Kharge',founded:1885,seats:99,color:'#22d3a0',ideology:'Social Democracy, Secularism'},
  {name:'Samajwadi Party',abbr:'SP',icon:'🚲',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Samajwadi_Party_logo.svg/100px-Samajwadi_Party_logo.svg.png',alliance:'india',leader:'Akhilesh Yadav',founded:1992,seats:37,color:'#ff5b6b',ideology:'Socialism, Social Justice'},
  {name:'All India Trinamool Congress',abbr:'AITC',icon:'🌸',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AITC_flag.svg/100px-AITC_flag.svg.png',alliance:'india',leader:'Mamata Banerjee',founded:1998,seats:29,color:'#4f9eff',ideology:'Regionalism, Populism'},
  {name:'Dravida Munnetra Kazhagam',abbr:'DMK',icon:'☀️',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DMK_Flag.svg/100px-DMK_Flag.svg.png',alliance:'india',leader:'M.K. Stalin',founded:1949,seats:22,color:'#f5c518',ideology:'Dravidian Movement, Federalism'},
  {name:'Telugu Desam Party',abbr:'TDP',icon:'🌾',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/TDP_new_symbol.jpg/100px-TDP_new_symbol.jpg',alliance:'nda',leader:'N. Chandrababu Naidu',founded:1982,seats:16,color:'#22d3a0',ideology:'Liberalism, Regionalism'},
  {name:'Janata Dal (United)',abbr:'JDU',icon:'⚙️',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Janata_Dal_%28United%29_logo.png/100px-Janata_Dal_%28United%29_logo.png',alliance:'nda',leader:'Nitish Kumar',founded:2003,seats:12,color:'#6c63ff',ideology:'Social Democracy, Federalism'},
  {name:'Shiv Sena (UBT)',abbr:'SS(UBT)',icon:'🐯',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/ShivSena.jpg/100px-ShivSena.jpg',alliance:'india',leader:'Uddhav Thackeray',founded:1966,seats:9,color:'#ff5b6b',ideology:'Hindutva, Regionalism'},
  {name:'Aam Aadmi Party',abbr:'AAP',icon:'🧹',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/AAP_flag.svg/100px-AAP_flag.svg.png',alliance:'india',leader:'Arvind Kejriwal',founded:2012,seats:3,color:'#4f9eff',ideology:'Anti-corruption, Liberalism'},
  {name:'Nationalist Congress Party (SP)',abbr:'NCP(SP)',icon:'🕰️',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/NCP_logo.png/100px-NCP_logo.png',alliance:'india',leader:'Sharad Pawar',founded:1999,seats:8,color:'#f5c518',ideology:'Secularism, Nationalism'},
  {name:'Biju Janata Dal',abbr:'BJD',icon:'🦚',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJD_Symbol.jpg/100px-BJD_Symbol.jpg',alliance:'other',leader:'Naveen Patnaik',founded:1997,seats:0,color:'#22d3a0',ideology:'Regionalism'},
  {name:'YSR Congress Party',abbr:'YSRCP',icon:'🌊',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/YSRCPflag.svg/100px-YSRCPflag.svg.png',alliance:'other',leader:'Y.S. Jagan Mohan Reddy',founded:2011,seats:4,color:'#6c63ff',ideology:'Populism, Welfarism'}
];

// CANDIDATES
const CANDIDATES=[
  {name:'Narendra Modi',party:'BJP',icon:'🪷',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/BJP_party_flag.png/60px-BJP_party_flag.png',const:'Varanasi',state:'Uttar Pradesh',status:'sitting',partyColor:'#ff8c00'},
  {name:'Rahul Gandhi',party:'INC',icon:'✋',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/60px-Indian_National_Congress_hand_logo.svg.png',const:'Wayanad / Rae Bareli',state:'Kerala / UP',status:'sitting',partyColor:'#22d3a0'},
  {name:'Akhilesh Yadav',party:'SP',icon:'🚲',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Samajwadi_Party_logo.svg/60px-Samajwadi_Party_logo.svg.png',const:'Kannauj',state:'Uttar Pradesh',status:'sitting',partyColor:'#ff5b6b'},
  {name:'Smriti Irani',party:'BJP',icon:'🪷',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/BJP_party_flag.png/60px-BJP_party_flag.png',const:'Amethi',state:'Uttar Pradesh',status:'sitting',partyColor:'#ff8c00'},
  {name:'Arvind Kejriwal',party:'AAP',icon:'🧹',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/AAP_flag.svg/60px-AAP_flag.svg.png',const:'New Delhi',state:'Delhi',status:'challenger',partyColor:'#4f9eff'},
  {name:'Mamata Banerjee',party:'AITC',icon:'🌸',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AITC_flag.svg/60px-AITC_flag.svg.png',const:'Bhawanipur',state:'West Bengal',status:'sitting',partyColor:'#4f9eff'},
  {name:'Chandrababu Naidu',party:'TDP',icon:'🌾',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/TDP_new_symbol.jpg/60px-TDP_new_symbol.jpg',const:'Kuppam',state:'Andhra Pradesh',status:'sitting',partyColor:'#22d3a0'},
  {name:'Nitish Kumar',party:'JDU',icon:'⚙️',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Janata_Dal_%28United%29_logo.png/60px-Janata_Dal_%28United%29_logo.png',const:'(CM - Rajya Sabha)',state:'Bihar',status:'sitting',partyColor:'#6c63ff'},
  {name:'Dimple Yadav',party:'SP',icon:'🚲',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Samajwadi_Party_logo.svg/60px-Samajwadi_Party_logo.svg.png',const:'Mainpuri',state:'Uttar Pradesh',status:'sitting',partyColor:'#ff5b6b'},
  {name:'Kangana Ranaut',party:'BJP',icon:'🪷',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/BJP_party_flag.png/60px-BJP_party_flag.png',const:'Mandi',state:'Himachal Pradesh',status:'new',partyColor:'#ff8c00'},
  {name:'Mahua Moitra',party:'AITC',icon:'🌸',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AITC_flag.svg/60px-AITC_flag.svg.png',const:'Krishnanagar',state:'West Bengal',status:'challenger',partyColor:'#4f9eff'},
  {name:'Chirag Paswan',party:'LJP(RV)',icon:'⚡',partyLogo:'',const:'Hajipur',state:'Bihar',status:'sitting',partyColor:'#f5c518'},
  {name:'Supriya Sule',party:'NCP(SP)',icon:'🕰️',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/NCP_logo.png/60px-NCP_logo.png',const:'Baramati',state:'Maharashtra',status:'sitting',partyColor:'#f5c518'},
  {name:'Uddhav Thackeray',party:'SS(UBT)',icon:'🐯',partyLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/ShivSena.jpg/60px-ShivSena.jpg',const:'Mumbai South',state:'Maharashtra',status:'challenger',partyColor:'#ff5b6b'},
  {name:'Omar Abdullah',party:'NC',icon:'🦁',partyLogo:'',const:'Baramulla',state:'J&K',status:'sitting',partyColor:'#22d3a0'},
  {name:'Asaduddin Owaisi',party:'AIMIM',icon:'🌙',partyLogo:'',const:'Hyderabad',state:'Telangana',status:'sitting',partyColor:'#6c63ff'}
];

// CONCEPTS
const CONCEPTS=[
  {emoji:'🗳️',title:'EVM (Electronic Voting Machine)',desc:'A tamper-proof standalone electronic device to record votes. Not connected to internet. Stores votes with battery backup.',tag:'Technology'},
  {emoji:'📄',title:'VVPAT (Paper Audit Trail)',desc:'Printer attached to EVM that shows a paper slip of your vote for 7 seconds before dropping into a sealed box.',tag:'Transparency'},
  {emoji:'📋',title:'Model Code of Conduct',desc:'Guidelines governing behavior of parties, candidates, and government from announcement until results. Violations punishable.',tag:'Regulation'},
  {emoji:'🎫',title:'EPIC / Voter ID Card',desc:'Electoral Photo Identity Card issued by ECI. Used as proof of voter registration and identity at polling booths.',tag:'Voter Rights'},
  {emoji:'🚫',title:'NOTA Option',desc:'"None of the Above" allows voters to reject all candidates. Introduced in India in 2013 by Supreme Court order.',tag:'Reform'},
  {emoji:'🏦',title:'Security Deposit',desc:'Fee paid by candidates while filing nominations. Forfeited if they receive less than 1/6th of total votes.',tag:'Process'},
  {emoji:'⚖️',title:'Returning Officer (RO)',desc:'Senior government official overseeing election in a constituency from nominations to declaring results.',tag:'Administration'},
  {emoji:'📊',title:'Electoral Roll',desc:'Official list of registered voters in a constituency. Updated before every election. Must be on roll to vote.',tag:'Voter Rights'},
  {emoji:'🔇',title:'Silence Period',desc:'The 48 hours before polling during which all campaigning, ads, and exit polls are strictly prohibited.',tag:'Regulation'},
  {emoji:'📰',title:'Affidavit of Assets',desc:'Mandatory declaration by every candidate disclosing financial assets, liabilities, and criminal record.',tag:'Transparency'},
  {emoji:'🏛️',title:'Constituency',desc:'A geographic area whose registered voters elect one representative. India has 543 Lok Sabha constituencies.',tag:'Structure'},
  {emoji:'✉️',title:'Postal Ballot',desc:'Allows military, overseas, and essential service voters to vote by post. Counted first on counting day.',tag:'Inclusion'}
];

// QUIZ - 20 QUESTIONS (shuffled every time)
const ALL_QUIZ=[
  {q:'What does EVM stand for?',opts:['Electric Vote Module','Electronic Voting Machine','Election Verification Method','Electronic Vote Monitor'],ans:1,exp:'EVM = Electronic Voting Machine — standalone, tamper-proof device used since 1982.'},
  {q:'What is the minimum voting age in India?',opts:['16 years','18 years','21 years','25 years'],ans:1,exp:'18 years, established by the 61st Constitutional Amendment Act, 1988.'},
  {q:'What is the Silence Period in Indian elections?',opts:['Post-result cooling period','48-hour no-campaigning window before polling','Nomination review period','Postal ballot counting time'],ans:1,exp:'The Silence Period is the 48 hours before polling — all campaigning is banned.'},
  {q:'What does NOTA stand for?',opts:['No Other Tactical Alternative','None of the Above','Not on the Approved list','National Option for Total Abstention'],ans:1,exp:'NOTA = None of the Above — formally reject all candidates on the ballot.'},
  {q:'VVPAT stands for:',opts:['Voter Verifiable Paper Audit Trail','Voting Verification Paper and Tracking','Valid Vote Print Authentication','Voter-Verified Poll Audit Trail'],ans:0,exp:'VVPAT = Voter-Verifiable Paper Audit Trail — prints visible slip when you vote.'},
  {q:'How many Lok Sabha constituencies exist in India?',opts:['498','530','543','560'],ans:2,exp:'India has 543 Lok Sabha constituencies, each electing one Member of Parliament.'},
  {q:'When does the Model Code of Conduct come into force?',opts:['On polling day','On announcement of election dates','After nominations close','After silence period'],ans:1,exp:'MCC activates immediately when Election Commission announces election dates.'},
  {q:'Security deposit for a general Lok Sabha candidate is:',opts:['Rs. 10,000','Rs. 25,000','Rs. 50,000','Rs. 1 lakh'],ans:1,exp:'Security deposit is Rs. 25,000 for general category (Rs. 12,500 for SC/ST).'},
  {q:'Which body conducts Lok Sabha elections in India?',opts:['Supreme Court','Parliament','Election Commission of India','Ministry of Home Affairs'],ans:2,exp:'The Election Commission of India (ECI) — an autonomous constitutional body.'},
  {q:'Postal ballots are counted:',opts:['Last, after EVM votes','First, before EVM votes','Simultaneously with EVM','They are discarded'],ans:1,exp:'Postal ballots (military, overseas voters) are always counted FIRST on counting day.'},
  {q:'Minimum age to contest Lok Sabha election is:',opts:['18 years','21 years','25 years','30 years'],ans:2,exp:'Candidates must be at least 25 years old to contest Lok Sabha or State Assembly.'},
  {q:'Maximum campaign expenditure per Lok Sabha candidate is:',opts:['Rs. 25 lakh','Rs. 50 lakh','Rs. 75 lakh','Rs. 95 lakh'],ans:3,exp:'ECI set the expenditure limit at Rs. 95 lakh per Lok Sabha candidate for 2024.'},
  {q:'NOTA was introduced in India in which year?',opts:['2009','2011','2013','2014'],ans:2,exp:'NOTA was introduced in 2013 following a Supreme Court directive in the PUCL case.'},
  {q:'Form 6 is used for:',opts:['Deleting name from electoral roll','New voter registration','Correcting details in voter roll','Applying for postal ballot'],ans:1,exp:'Form 6 is the application form for new voter registration in India.'},
  {q:'The VVPAT slip is visible to the voter for:',opts:['3 seconds','5 seconds','7 seconds','10 seconds'],ans:2,exp:'The VVPAT slip is visible through a transparent window for exactly 7 seconds.'},
  {q:'Who is the current Chief Election Commissioner of India (2024)?',opts:['Rajiv Kumar','Sushil Chandra','O.P. Rawat','Nasim Zaidi'],ans:0,exp:'Rajiv Kumar served as Chief Election Commissioner during the 2024 General Elections.'},
  {q:'Election Commission of India was established in:',opts:['1947','1950','1952','1955'],ans:1,exp:'The Election Commission of India was established on 25 January 1950 — now celebrated as National Voters Day.'},
  {q:'Which Article of the Indian Constitution establishes the Election Commission?',opts:['Article 245','Article 324','Article 368','Article 356'],ans:1,exp:'Article 324 of the Indian Constitution establishes the Election Commission of India.'},
  {q:'How many phases did the 2024 Lok Sabha election have?',opts:['5 phases','6 phases','7 phases','8 phases'],ans:2,exp:'The 2024 Lok Sabha General Election was held in 7 phases from April 19 to June 1, 2024.'},
  {q:'The security deposit is forfeited if a candidate gets less than:',opts:['1/4 of total votes','1/5 of total votes','1/6 of total votes','1/8 of total votes'],ans:2,exp:'A candidate forfeits security deposit if they fail to secure at least 1/6th of total votes polled.'}
];
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5);}

// CCTV DATA
const BOOTHS=[
  {id:'BOOTH-001',location:'Varanasi, UP',voters:1240,voted:876,status:'Active'},
  {id:'BOOTH-047',location:'Connaught Place, Delhi',voters:980,voted:654,status:'Active'},
  {id:'BOOTH-112',location:'Dharavi, Mumbai',voters:1450,voted:1102,status:'Active'},
  {id:'BOOTH-203',location:'Chennai South, TN',voters:1120,voted:890,status:'Active'}
];
const STATUS_ITEMS=[
  {label:'CCTV Feeds Online',val:'1,04,800 / 1,04,800',type:'ok'},
  {label:'Armed Security Deployed',val:'All booths',type:'ok'},
  {label:'Observer Coverage',val:'543 / 543 constituencies',type:'ok'},
  {label:'EVM Strong Rooms Sealed',val:'All secured',type:'ok'},
  {label:'Control Room Status',val:'Operational',type:'ok'},
  {label:'Live Voter Turnout',val:'66.8%',type:'warn'}
];

// EXPANDED CHAT KNOWLEDGE BASE
const KB={
  evm:{k:['evm','electronic voting','voting machine'],ans:'🗳️ **EVM (Electronic Voting Machine)**\n\nA standalone, tamper-proof device — NOT connected to internet.\n\n**Two units:**\n- **Control Unit** — with the polling officer\n- **Balloting Unit** — voter presses candidate button\n\nVotes stored in encrypted memory with battery backup. India has used EVMs since 1982, replacing paper ballots. Each EVM can record up to 2,000 votes.'},
  vvpat:{k:['vvpat','paper audit','paper trail'],ans:'📄 **VVPAT (Voter-Verifiable Paper Audit Trail)**\n\nPrinter attached to EVM Balloting Unit.\n\n**How it works:**\n1. You press the EVM button\n2. A paper slip prints showing candidate name + symbol + party\n3. Slip is visible through a sealed window for **7 seconds**\n4. Slip automatically drops into a sealed tamper-proof box\n\nVVPAT slips from 5 randomly selected booths per constituency are counted and cross-verified with EVM totals.'},
  vote:{k:['how to vote','cast vote','voting process','polling booth','polling day'],ans:'🗳️ **How to Cast Your Vote:**\n\n1. ✅ Ensure your name is on the Electoral Roll\n2. 🪪 Carry your EPIC (Voter ID) or approved alternate ID\n3. 📍 Go to your assigned polling booth (7 AM – 6 PM)\n4. 🖊️ Get indelible ink mark on left index finger\n5. 📋 Receive ballot slip from polling officer\n6. 🔘 Press the button next to your candidate on EVM\n7. 👁️ Verify VVPAT slip visible for 7 seconds\n\n⚠️ Mobile phones are NOT allowed inside the voting compartment.'},
  register:{k:['register','registration','voter id','epic card','form 6','enroll','how to get voter'],ans:'📝 **Voter Registration Steps:**\n\n1. Visit **voters.eci.gov.in** or download the **Voter Helpline App**\n2. Fill **Form 6** for new registration\n3. Upload: Age proof + Address proof + Passport photo\n4. Submit and track application online\n5. BLO (Booth Level Officer) may visit to verify details\n6. EPIC (Voter ID card) issued after approval\n\n📋 **Other Forms:**\n- Form 7 → Delete name from rolls\n- Form 8 → Correct existing details\n- Form 6B → Link Aadhaar to voter ID\n\n✅ Must be 18+ Indian citizen to register.'},
  candidate:{k:['candidate','contest election','stand for election','file nomination','nomination'],ans:'🏛️ **How to Become a Candidate:**\n\n**Eligibility:**\n- Indian citizen\n- Age: 25+ (Lok Sabha/Assembly), 30+ (Rajya Sabha)\n- Name on Electoral Roll\n- Must not hold any government office of profit\n\n**Nomination Process:**\n1. File nomination papers with Returning Officer\n2. Pay security deposit — Rs. 25,000 (general), Rs. 12,500 (SC/ST)\n3. Submit sworn affidavit of assets, liabilities & criminal record\n4. Get signatures of proposers from the constituency\n5. Scrutiny by RO within 1–2 days\n6. Withdraw before withdrawal deadline if desired'},
  mcc:{k:['model code','mcc','conduct','code of conduct'],ans:'📋 **Model Code of Conduct (MCC)**\n\nGuidelines issued by ECI governing all political parties, candidates, and the government.\n\n**Key Rules:**\n- No new government schemes after MCC activation\n- No use of govt vehicles/resources for campaigning\n- No hate speech or communal appeals\n- All paid political ads must be pre-certified\n- Sitting ministers cannot combine official visits with campaign\n\n**In force:** From election announcement → until result declaration\n\n**Violations:** Can lead to FIR, disqualification, or party de-recognition.'},
  nota:{k:['nota','none of the above'],ans:'🚫 **NOTA (None of the Above)**\n\nIntroduced in India in **2013** following Supreme Court order in the PUCL case.\n\nLast option on EVM — allows voters to formally reject ALL candidates.\n\n**Important:** Even if NOTA gets the most votes, the candidate with the next highest votes still WINS. NOTA currently has no "re-election" mandate.\n\n**Why it matters:** It gives voice to voter dissatisfaction and sends a democratic signal to parties about poor candidate selection.'},
  counting:{k:['counting','count votes','vote count','counting day','results'],ans:'📊 **Vote Counting Process:**\n\n1. Strong rooms opened under CCTV + Central observer\n2. **Postal ballots counted FIRST**\n3. EVM counting proceeds round by round (one assembly segment per round)\n4. All candidate agents observe each counting table\n5. RO announces leading/trailing tallies after each round\n6. After all rounds complete, winner formally declared\n7. Certificate of Election issued\n\n⚠️ Mobile phones, cameras NOT allowed in counting hall.'},
  silence:{k:['silence period','48 hour','48 hours','campaigning ban'],ans:'🔇 **Silence Period = 48 hours before polling**\n\n**Prohibited during silence period:**\n- Public meetings and roadshows\n- Political advertisements (print, TV, digital, radio)\n- Loud-speaker use for campaigning\n- Exit poll publication and broadcast\n- Processions\n\n**Allowed:** Candidates can still do door-to-door canvassing quietly.\n\nThis period allows voters to make decisions without last-minute partisan pressure.'},
  timeline:{k:['timeline','phases','steps','process','election schedule','election process'],ans:'📅 **Complete Indian Election Timeline:**\n\n📣 **Day 0** — Announcement + MCC activated\n📝 **Weeks 1–3** — Voter roll updates, registration\n🏛️ **Week 3–4** — Candidate nominations filed\n✍️ **+1–2 days** — Scrutiny & withdrawals\n📢 **3–4 weeks** — Campaign period\n🔇 **-48 hours** — Silence period begins\n🗳️ **Polling Day** — Voting 7 AM–6 PM\n📊 **Counting Day** — Postal first, then EVMs\n🏆 **Result Day** — Winner declared & certified'},
  parties:{k:['party','parties','bjp','congress','inc','sp','aitc','tmk','aap','alliance','nda','india bloc'],ans:'🏛️ **Major Parties — 2024 Lok Sabha Results:**\n\n**NDA Alliance (293 seats):**\n🪷 BJP — 240 seats (Narendra Modi)\n🌾 TDP — 16 seats (Chandrababu Naidu)\n⚙️ JDU — 12 seats (Nitish Kumar)\n\n**INDIA Alliance (234 seats):**\n✋ INC — 99 seats (Rahul Gandhi)\n🚲 SP — 37 seats (Akhilesh Yadav)\n🌸 AITC — 29 seats (Mamata Banerjee)\n☀️ DMK — 22 seats (M.K. Stalin)\n\nNDA formed government; Narendra Modi sworn in as PM for 3rd term.'},
  eci:{k:['election commission','eci','chief election commissioner','cec'],ans:'⚖️ **Election Commission of India (ECI)**\n\n- **Established:** 25 January 1950 (National Voters Day)\n- **Constitutional basis:** Article 324 of the Indian Constitution\n- **Head:** Chief Election Commissioner (CEC)\n- **Members:** CEC + 2 Election Commissioners\n\n**Powers:**\n- Conduct all elections to Parliament and State Legislatures\n- Issue Model Code of Conduct\n- De-recognize parties for violations\n- Deploy central security forces\n- Announce election schedule\n\nThe ECI is an **independent constitutional body** — not under any ministry.'},
  postal:{k:['postal ballot','postal vote','overseas voter','nri vote','armed forces'],ans:'✉️ **Postal Ballot Voting:**\n\n**Who can use it:**\n- Armed Forces personnel\n- Central Armed Police Forces\n- Government employees posted outside constituency\n- Persons with disabilities (optional)\n- Overseas citizens (limited)\n\n**Process:**\n1. Apply for postal ballot before the deadline\n2. Receive ballot paper by post or electronically\n3. Mark choice, seal in envelope, send back\n4. Postal ballots counted FIRST on counting day\n\nEDR (Electronically Transmitted Postal Ballot System) used for armed forces overseas.'},
  rollcheck:{k:['check voter list','am i registered','electoral roll','voter list','check name'],ans:'🔍 **How to Check Your Voter Registration:**\n\n1. Visit **voters.eci.gov.in**\n2. Click "Search in Electoral Roll"\n3. Enter your Name + Father/Husband Name + State + District\n   OR enter your EPIC (Voter ID) number\n4. Your voter details, booth number, and constituency will appear\n\n📱 **Voter Helpline App** — available on Android & iOS\n📞 **Helpline number:** 1950\n\nYou can also visit your nearest BLO (Booth Level Officer) office.'},
  strongroom:{k:['strong room','evm storage','evm security','evm after voting'],ans:'🔒 **EVM Strong Room Security:**\n\nAfter polling ends, EVMs are stored in specially designated Strong Rooms under:\n\n- **Triple-lock system** with keys held by different officials\n- **24/7 CCTV surveillance** with live feed to control room\n- **Armed CRPF/State police** guard posted continuously\n- **Candidate agents** can camp outside and observe\n- **Returning Officer** holds master key\n- Strong room opened ONLY on counting day in presence of all observers\n\nThis ensures zero tampering between polling and counting.'},
  byeelection:{k:['bye election','by-election','byelection','vacancy'],ans:'🗳️ **By-Election (Bye-Poll):**\n\nA by-election is held when a seat becomes vacant due to:\n- Death of a sitting member\n- Resignation\n- Disqualification\n- Election declared void by court\n\n**Key rules:**\n- Must be held within 6 months of vacancy\n- Same process as general election for that constituency\n- MCC applies only to that constituency\n- Cannot be held if less than 1 year remains in the term'},
  observer:{k:['election observer','observer','ias officer observer'],ans:'👁️ **Election Observers:**\n\nSenior IAS/IPS/IRS officers deployed by ECI as independent observers in every constituency.\n\n**Types:**\n- **General Observers** — monitor overall election conduct\n- **Expenditure Observers** — track candidate spending\n- **Police Observers** — monitor law enforcement\n- **Micro Observers** — stationed at sensitive polling booths on polling day\n\nObservers report directly to ECI and can suspend an election if serious violations occur.'},
  petition:{k:['election petition','challenge result','dispute result'],ans:'⚖️ **Election Petition:**\n\nIf a candidate or voter believes an election was conducted improperly, they can file an Election Petition.\n\n**Filed at:** High Court (for Lok Sabha/Assembly), Supreme Court (for President/VP)\n**Time limit:** Within **45 days** of result declaration\n**Grounds:** Corrupt practices, bribery, booth capturing, false declaration\n\n**Outcome:** Court can declare election void or disqualify the winning candidate.'},
  presidentelection:{k:['president election','presidential election','how president elected'],ans:'🏛️ **Presidential Election Process:**\n\n- President is NOT directly elected by citizens\n- Elected by **Electoral College** = elected MPs + elected MLAs\n- **Proportional Representation** with Single Transferable Vote system\n- ECI conducts Presidential elections\n- Rajya Sabha, Lok Sabha, and all State Legislative Assemblies vote\n\n**VP Election:** Similar process — elected by MPs (both Houses) only, no MLAs involved.'},
  delimit:{k:['delimitation','constituency boundary','redrawing'],ans:'🗺️ **Delimitation:**\n\nThe process of redrawing electoral constituency boundaries.\n\n- Done by the **Delimitation Commission** (independent body)\n- Based on latest census population data\n- Ensures roughly equal voter population per constituency\n- Last delimitation: 2008 (based on 2001 Census)\n- India\'s seat count (543) frozen until after 2026 Census\n\nDelimitation is a quasi-judicial process — its orders cannot be challenged in any court.'},
  aadhaar:{k:['aadhaar','aadhar link','form 6b'],ans:'🪪 **Aadhaar Linking with Voter ID:**\n\nUnder the Election Laws (Amendment) Act 2021, voters can voluntarily link their Aadhaar with Voter ID.\n\n**How:** Fill **Form 6B** at voters.eci.gov.in\n\n**Benefits:**\n- Helps remove duplicate voter entries\n- Reduces ghost voters from electoral rolls\n- Makes rolls more accurate\n\n**Important:** Linking is VOLUNTARY — not mandatory. Your vote cannot be denied if you don\'t link Aadhaar.'},
  exitpoll:{k:['exit poll','opinion poll','poll survey'],ans:'📊 **Exit Polls & Opinion Polls:**\n\n**Exit Poll:** Survey of voters conducted AFTER they have voted (outside the booth)\n**Opinion Poll:** Survey conducted BEFORE polling to predict voter intent\n\n**Rules in India:**\n- Exit poll results CANNOT be published during the silence period\n- Publication/broadcast of exit polls allowed only after last phase of polling ends\n- Violation is punishable under the Representation of the People Act\n\n**Accuracy:** Exit polls are projections, not official results. They have often been wrong in Indian elections.'},
  offoffice:{k:['office of profit','disqualification','disqualify'],ans:'⚠️ **Office of Profit Disqualification:**\n\nA person holding an "Office of Profit" under the Central or State Government CANNOT be a Member of Parliament or State Legislature.\n\n**Why:** To prevent conflict of interest and ensure legislative independence.\n\n**Exceptions:** Offices specifically exempted by Parliament or State Legislature.\n\n**Disqualification:** Decided by the President (for MPs) or Governor (for MLAs), on the advice of the Election Commission.'},
  default:{k:[],ans:'🤖 I\'m **ElectIQ**, specialized in **Indian Elections & Civic Education**.\n\nI can help you with:\n\n🗳️ EVM & VVPAT working\n📝 Voter registration & Forms\n🏛️ How to become a candidate\n📋 Model Code of Conduct\n📅 Complete election timeline\n🚫 NOTA option\n📊 Vote counting process\n🔒 EVM strong room security\n✉️ Postal ballot voting\n🏛️ Election Commission of India\n⚖️ Election petitions\n🗺️ Delimitation\n\nPlease ask me anything about elections and voting!'}
};

// NON-ELECTION DETECTOR
const NON_ELECTION_WORDS=['cricket','football','sport','movie','film','actor','actress','song','music','cook','recipe','food','weather','stock','share market','crypto','bitcoin','science','math','history','geography','programming','code','software','hardware','car','bike','travel','hotel','flight','fashion','clothing','health','medicine','doctor','hospital','animal','plant','space','astronomy','physics','chemistry','biology'];

function isNonElection(text){
  const l=text.toLowerCase();
  return NON_ELECTION_WORDS.some(w=>l.includes(w)) && !l.includes('vote') && !l.includes('elect') && !l.includes('party') && !l.includes('candidate') && !l.includes('poll');
}

function getResponse(input){
  if(isNonElection(input)){
    return '🚫 I can only answer questions related to **elections, voting, civic rights, and democratic processes**.\n\nPlease ask me about topics like voter registration, EVMs, election timelines, political parties, candidacy rules, or the Election Commission of India.';
  }
  const l=input.toLowerCase();
  for(const key of Object.keys(KB)){
    if(key==='default')continue;
    const entry=KB[key];
    if(entry.k.some(kw=>l.includes(kw)))return entry.ans;
  }
  // Secondary keyword pass
  if(l.includes('win')||l.includes('result')||l.includes('winner'))return KB.counting.ans;
  if(l.includes('booth')||l.includes('station'))return KB.vote.ans;
  if(l.includes('form'))return KB.register.ans;
  if(l.includes('age')||l.includes('eligib'))return KB.candidate.ans;
  if(l.includes('seal')||l.includes('tamper')||l.includes('hack'))return KB.strongroom.ans;
  if(l.includes('survey')||l.includes('predict'))return KB.exitpoll.ans;
  if(l.includes('boundary')||l.includes('seat'))return KB.delimit.ans;
  if(l.includes('link')||l.includes('aadhar')||l.includes('aadhaar'))return KB.aadhaar.ans;
  return KB.default.ans;
}

const TOPICS=[
  {label:'How does EVM work?',key:'evm'},
  {label:'Voter registration steps',key:'register'},
  {label:'Election timeline & phases',key:'timeline'},
  {label:'What is NOTA?',key:'nota'},
  {label:'Model Code of Conduct',key:'mcc'},
  {label:'Vote counting process',key:'counting'},
  {label:'Becoming a candidate',key:'candidate'},
  {label:'Political parties 2024',key:'parties'},
  {label:'What is VVPAT?',key:'vvpat'},
  {label:'Postal ballot voting',key:'postal'},
  {label:'EVM strong room security',key:'strongroom'},
  {label:'Election Commission of India',key:'eci'}
];

// ── RENDER STEPS ──
const stepsGrid=document.getElementById('stepsGrid');
STEPS.forEach(s=>{const c=document.createElement('div');c.className='step-card';c.innerHTML=`<div class="step-num">${s.num}</div><div class="step-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.desc}</p>`;stepsGrid.appendChild(c);});

// ── RENDER TIMELINE ──
const tTrack=document.getElementById('timelineTrack'),tPanel=document.getElementById('timelinePanel');
TIMELINE.forEach((ph)=>{
  const el=document.createElement('div');el.className='timeline-phase';
  el.innerHTML=`<div class="phase-node">${ph.icon}</div><div class="phase-label">${ph.label}</div>`;
  el.addEventListener('click',()=>{
    document.querySelectorAll('.timeline-phase').forEach(p=>p.classList.remove('active'));
    el.classList.add('active');
    tPanel.innerHTML=`<div class="panel-detail"><h3>${ph.icon} ${ph.title}</h3><span class="phase-duration">⏱ ${ph.duration}</span><p>${ph.desc}</p><ul>${ph.points.map(pt=>`<li>${pt}</li>`).join('')}</ul></div>`;
  });
  tTrack.appendChild(el);
});

// ── VOTER STATS COUNTERS ──
function animateCounter(el,target){
  const start=Date.now(),duration=2000;
  function update(){
    const elapsed=Date.now()-start,progress=Math.min(elapsed/duration,1),val=Math.floor(progress*target);
    el.textContent=val>=10000000?`${(val/10000000).toFixed(2)} Cr`:`${val.toLocaleString('en-IN')}`;
    if(progress<1)requestAnimationFrame(update);
    else el.textContent=target>=10000000?`${(target/10000000).toFixed(2)} Cr`:`${target.toLocaleString('en-IN')}`;
  }update();
}
const counterObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){animateCounter(e.target,parseInt(e.target.dataset.target));counterObs.unobserve(e.target);}});
},{threshold:0.3});
document.querySelectorAll('.stat-counter').forEach(el=>counterObs.observe(el));

// ── BAR CHART ──
const barChart=document.getElementById('stateBarChart');
if(barChart){STATE_DATA.forEach(d=>{const row=document.createElement('div');row.className='bar-row';row.innerHTML=`<span class="bar-state">${d.state}</span><div class="bar-track"><div class="bar-fill" style="width:0%" data-pct="${d.pct}"></div></div><span class="bar-val">${d.voters}</span>`;barChart.appendChild(row);});}
const barObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.bar-fill').forEach(b=>{setTimeout(()=>{b.style.width=b.dataset.pct+'%';},100);});barObs.unobserve(e.target);}});},{threshold:0.2});
if(barChart)barObs.observe(barChart);

// ── DONUT CHART ──
const donutCanvas=document.getElementById('donutChart');
if(donutCanvas){
  const dc=donutCanvas.getContext('2d'),cx=110,cy=110,r=80,ir=50;
  let startAngle=-Math.PI/2;
  const total=DONUT_DATA.reduce((a,d)=>a+d.value,0);
  DONUT_DATA.forEach(d=>{const slice=(d.value/total)*Math.PI*2;dc.beginPath();dc.moveTo(cx,cy);dc.arc(cx,cy,r,startAngle,startAngle+slice);dc.closePath();dc.fillStyle=d.color;dc.fill();startAngle+=slice;});
  dc.beginPath();dc.arc(cx,cy,ir,0,Math.PI*2);dc.fillStyle='#07091a';dc.fill();
  const legend=document.getElementById('donutLegend');
  DONUT_DATA.forEach(d=>{const item=document.createElement('div');item.className='legend-item';item.innerHTML=`<div class="legend-dot" style="background:${d.color}"></div>${d.label}: <strong style="color:#e8eaf6;margin-left:4px">${d.value}%</strong>`;legend.appendChild(item);});
}

// ── PARTIES (with logos) ──
const partiesGrid=document.getElementById('partiesGrid');
let activeAlliance='all';
function renderParties(){
  partiesGrid.innerHTML='';
  (activeAlliance==='all'?PARTIES:PARTIES.filter(p=>p.alliance===activeAlliance)).forEach(p=>{
    const card=document.createElement('div');card.className='party-card';
    const badgeClass=p.alliance==='nda'?'nda-badge':p.alliance==='india'?'india-badge':'other-badge';
    const badgeText=p.alliance==='nda'?'🟠 NDA Alliance':p.alliance==='india'?'✊ INDIA Alliance':'🔵 Regional/Other';
    const logoHtml=p.logo?`<img src="${p.logo}" alt="${p.abbr}" style="width:48px;height:48px;object-fit:contain;border-radius:8px" onerror="this.style.display='none';this.nextSibling.style.display='flex'">`:'';
    const iconDiv=`<div style="width:48px;height:48px;border-radius:12px;background:${p.color}22;border:1px solid ${p.color}44;display:${p.logo?'none':'flex'};align-items:center;justify-content:center;font-size:1.6rem">${p.icon}</div>`;
    card.innerHTML=`<div class="party-top"><div class="party-flag" style="background:${p.color}11;border:1px solid ${p.color}33;overflow:hidden">${logoHtml}${iconDiv}</div><div><div class="party-name">${p.name}</div><div class="party-abbr">${p.abbr}</div></div></div><div class="party-info"><div class="party-row"><span>Leader</span><strong>${p.leader}</strong></div><div class="party-row"><span>Founded</span><strong>${p.founded}</strong></div><div class="party-row"><span>Ideology</span><strong style="font-size:.73rem">${p.ideology}</strong></div></div><div style="margin-top:10px"><span class="party-seats">🪑 ${p.seats} seats (2024)</span> <span class="alliance-badge ${badgeClass}">${badgeText}</span></div>`;
    partiesGrid.appendChild(card);
  });
}
document.querySelectorAll('.alliance-tab').forEach(tab=>{tab.addEventListener('click',()=>{document.querySelectorAll('.alliance-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');activeAlliance=tab.dataset.alliance;renderParties();});});
renderParties();

// ── CANDIDATES (with party logos) ──
const candGrid=document.getElementById('candidatesGrid');
const stateFilter=document.getElementById('stateFilter');
const states=[...new Set(CANDIDATES.map(c=>c.state))].sort();
states.forEach(s=>{const o=document.createElement('option');o.value=s;o.textContent=s;stateFilter.appendChild(o);});
function renderCandidates(search='',state='all'){
  candGrid.innerHTML='';
  CANDIDATES.filter(c=>{
    const m=!search||c.name.toLowerCase().includes(search)||c.const.toLowerCase().includes(search)||c.party.toLowerCase().includes(search);
    return m&&(state==='all'||c.state===state);
  }).forEach(c=>{
    const card=document.createElement('div');card.className='cand-card';
    const stClass=c.status==='sitting'?'status-sitting':c.status==='new'?'status-new':'status-challenger';
    const stLabel=c.status==='sitting'?'✅ Sitting MP/MLA':c.status==='new'?'🆕 New Entrant':'⚡ Challenger';
    const logoHtml=c.partyLogo?`<img src="${c.partyLogo}" alt="${c.party}" style="width:28px;height:28px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:`<span style="font-size:1.2rem">${c.icon}</span>`;
    card.innerHTML=`<div class="cand-top"><div class="cand-avatar" style="background:${c.partyColor}22;border-color:${c.partyColor}55;font-size:1.6rem">${c.icon}</div><div><div class="cand-name">${c.name}</div><div class="cand-party" style="display:flex;align-items:center;gap:5px">${logoHtml} ${c.party}</div></div></div><div class="cand-const">📍 ${c.const}</div><div class="cand-state">🗺️ ${c.state}</div><span class="cand-status ${stClass}">${stLabel}</span>`;
    candGrid.appendChild(card);
  });
}
document.getElementById('candidateSearch').addEventListener('input',e=>renderCandidates(e.target.value.toLowerCase(),stateFilter.value));
stateFilter.addEventListener('change',e=>renderCandidates(document.getElementById('candidateSearch').value.toLowerCase(),e.target.value));
renderCandidates();

// ── CONCEPTS ──
const conceptsGrid=document.getElementById('conceptsGrid');
CONCEPTS.forEach(c=>{const card=document.createElement('div');card.className='concept-card';card.innerHTML=`<div class="concept-emoji">${c.emoji}</div><h3>${c.title}</h3><p>${c.desc}</p><span class="concept-tag">${c.tag}</span>`;conceptsGrid.appendChild(card);});

// ── CCTV ──
const cctvGrid=document.getElementById('cctvGrid');
const COLORS=['#0a1a0a','#0a0a1a','#1a0a0a','#0a1a1a'];
BOOTHS.forEach((b,i)=>{
  const feed=document.createElement('div');feed.className='cctv-feed live';
  const pct=Math.round((b.voted/b.voters)*100);
  const persons=Array.from({length:18},(_,j)=>`<circle cx="${12+j*10+Math.sin(j)*4}" cy="${85+Math.cos(j*1.5)*15}" r="5" fill="rgba(79,158,255,0.${2+Math.floor(Math.random()*5)})"/><rect x="${9+j*10+Math.sin(j)*4}" y="90" width="6" height="18" rx="2" fill="rgba(79,158,255,0.${1+Math.floor(Math.random()*3)})"/>`).join('');
  feed.innerHTML=`<div class="cctv-screen" style="background:${COLORS[i]}">
    <svg viewBox="0 0 200 150" style="width:100%;height:100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="80" y="15" width="50" height="35" rx="4" fill="rgba(245,197,24,0.12)" stroke="rgba(245,197,24,0.5)" stroke-width="1"/>
      <text x="105" y="37" text-anchor="middle" fill="#f5c518" font-size="9" font-family="monospace">⚡ EVM</text>
      ${persons}
      <line x1="0" y1="108" x2="200" y2="108" stroke="rgba(79,158,255,0.15)" stroke-width="1"/>
      <rect x="0" y="108" width="200" height="42" fill="rgba(0,0,0,0.4)"/>
    </svg>
    <div class="cctv-overlay"></div>
    <div class="cctv-label">📹 ${b.id} | ${b.location}</div>
    <div class="cctv-live">● LIVE</div>
    <div class="cctv-time" id="cctvT${i}">00:00:00</div>
    <div class="cctv-voters">👥 ${b.voted}/${b.voters} (${pct}%)</div>
  </div>`;
  cctvGrid.appendChild(feed);
});
function updateCCTVTime(){
  const t=new Date(),ts=`${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}:${String(t.getSeconds()).padStart(2,'0')}`;
  for(let i=0;i<4;i++){const el=document.getElementById('cctvT'+i);if(el)el.textContent=ts;}
}
setInterval(updateCCTVTime,1000);updateCCTVTime();
const statusItemsEl=document.getElementById('statusItems');
STATUS_ITEMS.forEach(s=>{const div=document.createElement('div');div.className='status-item';div.innerHTML=`<div class="s-dot ${s.type==='ok'?'s-ok':'s-warn'}"></div><span class="s-label">${s.label}</span><span class="s-val">${s.val}</span>`;statusItemsEl.appendChild(div);});
const logEl=document.getElementById('logEntries');
const LOG_MSGS=['Voter verified at Booth-001','VVPAT slip confirmed — Booth-047','Observer check completed — Booth-112','EVM battery OK — Booth-203','Voter ID verified — Booth-001','Control room ping acknowledged','Mock poll data discarded','Booth captain report submitted','Ink pad refill — Booth-047','Security patrol completed','Tender vote recorded — Booth-112','Challenged vote resolved — Booth-001'];
function addLog(){const t=new Date(),ts=`${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}:${String(t.getSeconds()).padStart(2,'0')}`;const msg=LOG_MSGS[Math.floor(Math.random()*LOG_MSGS.length)];const entry=document.createElement('div');entry.className='log-entry';entry.innerHTML=`<span class="log-time">[${ts}]</span> <span class="log-event">${msg}</span>`;logEl.insertBefore(entry,logEl.firstChild);if(logEl.children.length>20)logEl.removeChild(logEl.lastChild);}
for(let i=0;i<8;i++)addLog();setInterval(addLog,3000);

// ── QUIZ — picks 12 random from pool of 20, shuffled each time ──
let CURRENT_QUIZ=[],curQ=0,score=0;
const quizCard=document.getElementById('quizCard');
const quizScore=document.getElementById('quizScorePanel');
const qFill=document.getElementById('quizProgressFill');
const qLabel=document.getElementById('quizQLabel');
const qScoreLabel=document.getElementById('quizScoreLabel');
const QUESTIONS_PER_ROUND=12;

function startNewQuiz(){
  // Shuffle all 20, pick first 12 — different every time
  CURRENT_QUIZ=shuffle(ALL_QUIZ).slice(0,QUESTIONS_PER_ROUND);
  curQ=0;score=0;
  quizScore.classList.add('hidden');quizCard.classList.remove('hidden');
  renderQuiz();
}

function renderQuiz(){
  if(curQ>=CURRENT_QUIZ.length){showScore();return;}
  const q=CURRENT_QUIZ[curQ];
  qFill.style.width=`${(curQ/CURRENT_QUIZ.length)*100}%`;
  qLabel.textContent=`Question ${curQ+1} of ${CURRENT_QUIZ.length}`;
  qScoreLabel.textContent=`Score: ${score}`;
  // Shuffle answer options too, track correct answer index
  const indices=shuffle([0,1,2,3]);
  const shuffledOpts=indices.map(i=>q.opts[i]);
  const newAns=indices.indexOf(q.ans);
  quizCard.innerHTML=`<div class="quiz-q">${q.q}</div><div class="quiz-options">${shuffledOpts.map((o,i)=>`<button class="quiz-option" data-i="${i}">${o}</button>`).join('')}</div><div id="qfb"></div><div class="quiz-nav" id="qnav" style="display:none"><button class="quiz-next-btn" id="qnext">${curQ===CURRENT_QUIZ.length-1?'See Results 🏆':'Next Question →'}</button></div>`;
  quizCard.querySelectorAll('.quiz-option').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const chosen=parseInt(btn.dataset.i);
      quizCard.querySelectorAll('.quiz-option').forEach(b=>b.disabled=true);
      btn.classList.add(chosen===newAns?'correct':'wrong');
      if(chosen!==newAns)quizCard.querySelectorAll('.quiz-option')[newAns].classList.add('correct');
      if(chosen===newAns)score++;
      qScoreLabel.textContent=`Score: ${score}`;
      document.getElementById('qfb').innerHTML=`<div class="quiz-feedback ${chosen===newAns?'correct-fb':'wrong-fb'}">${chosen===newAns?'✅ Correct!':'❌ Incorrect!'} ${q.exp}</div>`;
      document.getElementById('qnav').style.display='flex';
    });
  });
  document.getElementById('qnext').addEventListener('click',()=>{curQ++;renderQuiz();});
}

function showScore(){
  qFill.style.width='100%';
  quizCard.classList.add('hidden');quizScore.classList.remove('hidden');
  const pct=Math.round((score/CURRENT_QUIZ.length)*100);
  const emoji=pct>=80?'🏆':pct>=60?'🥈':'📚';
  const msg=pct>=80?'Outstanding! You are a true civic champion! 🌟':pct>=60?'Good job! Keep learning about democracy.':'Every attempt makes you a more informed voter!';
  quizScore.innerHTML=`<div class="score-emoji">${emoji}</div><div class="score-title">Quiz Complete!</div><div class="score-value">${score} / ${CURRENT_QUIZ.length}</div><div class="score-msg">${msg} <strong>(${pct}%)</strong></div><div style="display:flex;gap:12px;justify-content:center;margin-top:20px"><button class="quiz-restart-btn" id="qrestart">🔄 New Quiz (Different Questions)</button></div>`;
  document.getElementById('qrestart').addEventListener('click',startNewQuiz);
}
startNewQuiz();

// ── CHAT ──
const chatMsgs=document.getElementById('chatMessages');
const chatInput=document.getElementById('chatInput');
function getTime(){return new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});}
function appendMsg(text,role){
  const div=document.createElement('div');div.className=`msg ${role}`;
  div.innerHTML=`<div class="msg-avatar">${role==='bot'?'🤖':'👤'}</div><div><div class="msg-bubble">${text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</div><span class="msg-time">${getTime()}</span></div>`;
  chatMsgs.appendChild(div);chatMsgs.scrollTop=chatMsgs.scrollHeight;
}
function showTyping(){const div=document.createElement('div');div.className='msg bot';div.id='typing';div.innerHTML=`<div class="msg-avatar">🤖</div><div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;chatMsgs.appendChild(div);chatMsgs.scrollTop=chatMsgs.scrollHeight;}
function removeTyping(){const t=document.getElementById('typing');if(t)t.remove();}
function sendMessage(text){
  if(!text.trim())return;
  appendMsg(text,'user');chatInput.value='';showTyping();
  setTimeout(()=>{removeTyping();appendMsg(getResponse(text),'bot');},700+Math.random()*500);
}
document.getElementById('chatSend').addEventListener('click',()=>sendMessage(chatInput.value));
chatInput.addEventListener('keydown',e=>{if(e.key==='Enter')sendMessage(chatInput.value);});
const topicChipsEl=document.getElementById('topicChips');
TOPICS.forEach(t=>{const btn=document.createElement('button');btn.className='topic-chip';btn.textContent=t.label;btn.addEventListener('click',()=>sendMessage(t.label));topicChipsEl.appendChild(btn);});
setTimeout(()=>appendMsg('👋 Hello! I\'m **ElectIQ** — your AI guide to Indian elections!\n\nI can answer questions about voter registration, EVMs, VVPAT, election timelines, political parties, candidacy rules, MCC, vote counting, and much more.\n\n⚠️ I only answer **election and voting related** questions. Ask away!','bot'),500);

// ── SCROLL ANIMATIONS ──
const scrollObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.animation='fadeUp .5s ease forwards';scrollObs.unobserve(e.target);}});},{threshold:0.08});
document.querySelectorAll('.step-card,.concept-card,.party-card,.cand-card,.tf-card,.stat-big-card,.breakdown-card').forEach(el=>{el.style.opacity='0';scrollObs.observe(el);});
