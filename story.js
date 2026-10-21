/* =====================================================================
   story.js: everything specific to ONE story lives in this file.
   To use the coder with a different story, replace the values below.
   See README.md for what each field means.
   ===================================================================== */
window.STORY = {
  // Shown in the page header and browser tab.
  title: "Amelia Recall Coder",
  subtitle: "“After Careful Consideration” · free-recall unitizing and source coding",
  // Short name used in exported file names and saved browser settings (letters, digits and _ only).
  slug: "amelia_recall",

  // The story's segments ("Acts"). Keys are the segment numbers used in `units` below.
  acts: {1:"Setup: Amelia, her CS goal, the NMSU test",2:"Cafeteria scene with Chrissy",3:"Back to school at night; finds the envelope",4:"Realizes it's the test; weighs cheating",5:"The decision; leaving the school",6:"March: the NMSU letter and her reaction"},

  // The master idea-unit list, one row per idea unit:
  // [unit number, act number, label, story text, other-condition text or null, "G" (gist) or "D" (detail)]
  units: [
[1,1,"Time","It's late August",null,"D"],
[2,1,"Location","in Silver City, New Mexico",null,"D"],
[3,1,"Character","Amelia",null,"D"],
[4,1,"Character Age","is about to start her senior year of high school.",null,"D"],
[5,1,"Character Motivation","Amelia has a strong interest in computer science.",null,"G"],
[6,1,"Character Thwarted Need","which she's never really been able to pursue",null,"D"],
[7,1,"Location Detail","in her small town.",null,"D"],
[8,1,"Character Motivation","So, she figures college is the only way to develop her interests.",null,"G"],
[9,1,"Character Motivation","This is it. It's her last chance to do something that would help her get into college.",null,"G"],
[10,1,"Character Skill","Although she's great at programming,",null,"D"],
[11,1,"Character Skill","her grades have never been very good.",null,"D"],
[12,1,"Character Motivation","Her only hope is a computer programming test that New Mexico State University offers to students just like her, who would otherwise not qualify for admission.",null,"G"],
[13,1,"Desired Outcome","A high enough score on the programming test would automatically admit Amelia into NMSU.",null,"G"],
[14,1,"Undesired Outcome","Otherwise, she might as well kiss college goodbye.",null,"G"],
[15,1,"Character Motivation","Amelia needs to give it everything she has.",null,"G"],
[16,1,"Moral Conflict","But how far is Amelia willing to go.",null,"G"],
[17,2,"Amelia Dialog","“Hey, Chrissy!”",null,"D"],
[18,2,"Scene Information","Amelia called out across the cafeteria.",null,"D"],
[19,2,"Character Response","Chrissy looked up and smiled.","Chrissy looked up and cringed.","D"],
[20,2,"Character Detail","Chrissy was sitting in her wheelchair at her usual spot.",null,"D"],
[21,2,"Character Detail","She was born with muscular dystrophy and had been in a wheelchair her entire life",null,"D"],
[22,2,"Character Relationship","Amelia had been Chrissy's best friend since Kindergarten.","Amelia had been Chrissy's bully since Kindergarten","G"],
[23,2,"Amelia Moral Behavior","She always went out of her way to make Chrissy's life cheerful.","She always went out of her way to make Chrissy's life miserable.","G"],
[24,2,"Chrissy Dialog","“Hi, Amelia,” Chrissy replied",null,"D"],
[25,2,"Scene Information","as Amelia approached her table in the corner.",null,"D"],
[26,2,"Amelia Dialog","“What are you up to, Crippsy?”",null,"D"],
[27,2,"Dialog Explanation","The nickname, a combination of Cripple and Chrissy,",null,"D"],
[28,2,"Character Past","had followed Chrissy since elementary school.",null,"D"],
[29,2,"Origin of Nickname","Amelia created the amalgam",null,"D"],
[30,2,"Character Morality","in order to turn a hurtful nickname into something endearing.","in order to turn a hurtful nickname into something unrelenting.","G"],
[31,2,"Character Relationship","It was one of those nicknames that only a close friend could use,","It was one of those nicknames that only a bully would use,","G"],
[32,2,"Chrissy Reaction","and every time Chrissy heard it, it made her feel like smiling.","and every time Chrissy heard it, it made her feel like crying.","G"],
[33,2,"Chrissy Dialog","“Nothing much. Waiting for my dance teacher,” Chrissy said sarcastically.",null,"D"],
[34,2,"Character Interaction","Amelia laughed and mussed Chrissy's hair, sitting down next to her.",null,"D"],
[35,2,"Amelia Dialog","“I've gotta take that test this weekend. You know, the programming one that NMSU gives every year,” said Amelia.",null,"D"],
[36,2,"Chrissy Dialog","“Is that this weekend? I always thought it was later in the year.”",null,"D"],
[37,2,"Amelia Dialog","“They moved it up this year. Something about making sure that everyone had a chance to sit for it. Anyway, I'm sure I'll do well.”",null,"D"],
[38,2,"Chrissy Dialog","“Why? You never do well in your classes,” Chrissy said smirking.",null,"D"],
[39,2,"Amelia Dialog","“Oh don't worry. A standup gal like me? I'll do great,” replied Amelia.",null,"D"],
[40,2,"Scene Information","Just then the bell rang to end lunch.",null,"D"],
[41,2,"Chrissy Reaction","Chrissy was sad that Amelia had to go.","Chrissy was relieved that Amelia had to go.","G"],
[42,2,"Chrissy Reaction","She wished she could continue talking to her.","She couldn't tolerate talking to her.","G"],
[43,2,"Amelia Dialog","“Well, gotta go. See ya later,” Amelia said as she started to walk away.","“Well, gotta go. See ya later, Crippsy,” Amelia said as she started to walk away.","D"],
[44,2,"Chrissy Dialog","“Not if I see you first.”",null,"D"],
[45,3,"Time","It was eight o'clock on Friday night,",null,"D"],
[46,3,"Location","and Amelia was walking through the empty school parking lot towards the backside of the main building.",null,"D"],
[47,3,"Impetus for Scene","She had forgotten her programming notebook, and she desperately needed it to prepare for NMSU's test.",null,"G"],
[48,3,"Impetus for Scene","With any luck, the custodian would still be tidying up, and he would let her in so she could grab it from her locker.",null,"G"],
[49,3,"Character Reaction","As she rounded the corner, she let out a sigh of relief.",null,"D"],
[50,3,"Opportunity","The custodian's van was still there, and the backdoor of the building was propped open with a brick.",null,"G"],
[51,3,"Character Dialog","She slipped inside and called, “Hello?”",null,"D"],
[52,3,"Scene Response","but no one answered.",null,"D"],
[53,3,"Scene Information","Her voice echoed through the empty halls.",null,"D"],
[54,3,"Scene Response","After waiting a couple of minutes and still getting no answer",null,"D"],
[55,3,"Character Action","she decided that she didn't have time to wait around for him.",null,"D"],
[56,3,"Character Reasoning","He probably has his headphones on and can't hear me.",null,"D"],
[57,3,"Character Planning","I'll just go to my locker, grab my stuff, and leave.",null,"D"],
[58,3,"Character Reasoning","No one will even know I'm here, Amelia thought to herself.",null,"D"],
[59,3,"Character Reasoning","If I run into the custodian, I'll just explain the situation.",null,"D"],
[60,3,"Character Action","Amelia quickly walked to her locker, put in her combination, and grabbed her notebook.",null,"D"],
[61,3,"Character Action","As she started back towards the exit, she passed the main office.",null,"D"],
[62,3,"MacGuffin","Lying on the floor right outside the door, she saw a large envelope with NMSU's logo on it and CONFIDENTIAL printed in large red letters.",null,"G"],
[63,3,"Explanation for MacGuffin","The principal or some other teacher must have dropped it and not realized.",null,"D"],
[64,3,"Explanation for MacGuffin","Amelia bent down and picked it up, and she noticed that the return address was the Computer Science Department at NMSU.",null,"D"],
[65,4,"Character Realization","Suddenly, it dawned on Amelia what she was looking at: It was a copy of the test!",null,"G"],
[66,4,"Opportunity for Immoral Action","Amelia could take the test home with her, use it to prepare for tomorrow, and no one would ever know.",null,"G"],
[67,4,"Eliminate Risk of Getting Caught","Whoever dropped it would likely assume that the custodian picked it up and threw it away,",null,"D"],
[68,4,"Eliminate Risk of Getting Caught","and even if they didn't, no one knew she was there.",null,"D"],
[69,4,"Eliminate Risk of Getting Caught","She'd never get caught,",null,"D"],
[70,4,"Explicate Cheating","especially if she missed a few questions on purpose so it wasn't obvious that she cheated.",null,"D"],
[71,4,"Character Decision Uncertainty","Amelia didn't know what to do.",null,"G"],
[72,4,"Outcome Positive Certainty","If she took the test with her, she'd essentially guarantee her admission to NMSU.",null,"D"],
[73,4,"Negative Side Effect for Others","But taking the test would be cheating, and if she cheated, she'd have an unfair advantage over other students just like her.",null,"G"],
[74,4,"Negative Side Effect for Others","There were only so many admission slots dedicated to programmers, and her cheating might result in an even more deserving student being denied admission.",null,"G"],
[75,4,"Negative Side Effect Imagined for Self","Amelia thought about how devastated she would be if she didn't get in because someone else cheated her out of her spot.",null,"D"],
[76,4,"Character Decision Uncertainty","Thoughts raced through Amelia's mind.",null,"G"],
[77,4,"Decision Explicated","Should she grab the envelope and run or leave it where she found it?",null,"G"],
[78,4,"Immediate Decision Necessity","She'd have to decide fast because she could hear someone coming down the hall…",null,"D"],
[79,5,"Decision Made","Amelia made up her mind. She left the test where she found it and ran back out the open backdoor.","Amelia made up her mind. She grabbed the test and ran back out the open backdoor.","G"],
[80,5,"Decision Satisfaction","As she slowed down and walked back through the parking lot, she could picture all the other students preparing for the test and felt confident and satisfied with her decision.",null,"D"],
[81,5,"Decision Satisfaction","She knew it was a smart choice, even if not everyone would agree.",null,"D"],
[82,5,"Decision Explicated","Now that she had her notebook,","Now that she had a copy of the test,","G"],
[83,5,"Decision Satisfaction","she'd be ready to study when she got home.",null,"D"],
[84,5,"Decision Satisfaction","She smiled to herself knowing she'd be back here in the morning ready for the test.",null,"D"],
[85,6,"Scene Information","It was early March.",null,"D"],
[86,6,"Time Elapsed","It had been months since the test",null,"D"],
[87,6,"Decision Satisfaction","and Amelia was still feeling good about her decision.",null,"D"],
[88,6,"Anticipated Outcome","Colleges had started to send out their final acceptances, and Amelia was checking her mailbox every day for a letter from NMSU.",null,"D"],
[89,6,"Anticipation","As she walked home from school, Amelia had a feeling that today was the day.",null,"D"],
[90,6,"Positive Feelings for Amelia","She felt like she was walking on air as she turned the corner onto her block.",null,"D"],
[91,6,"Outcome Anticipation","When she got to her mailbox, she flung the door open, and inside was an envelope addressed to her. The return address read: “Admissions Office, New Mexico State University.”",null,"D"],
[92,6,"Outcome Anticipation","Amelia rushed inside to her room and jumped on her bed. She tore open the letter and pulled out the envelope. She found the first line and began to read:",null,"D"],
[93,6,"Outcome Preview","Dear Amelia: The admissions committee has carefully reviewed your application. After much consideration,",null,"D"],
[94,6,"Outcome","I am pleased to inform you…","I regret to inform you…","G"],
[95,6,"Character Affect","Amelia could feel tears welling up in her eyes.",null,"G"],
[96,6,"Character Affect","She had never been so happy.","She had never been so devastated.","G"]
],

  // The unitizing guide shown to unitizers in the side panel (HTML).
  guide: `<div class="guide">
<p class="glead">Split each response into <b>clause-level units</b>: one subject with one verb (the subject can be left out, as in "and went home"). This matches how the story itself is divided, so most recall units line up with one idea unit in the key.</p>
<h3>Where the split goes</h3>
<ul>
<li><b>After every period.</b> Every sentence end gets a split, so click the last word of each sentence.</li>
<li><b>Before the joining word.</b> "and", "or", "because" and the like start the new unit. Click the word just before the joining word.<div class="gex">she realized it was a copy of the test <span class="gcut">‖</span> and thought about taking it</div></li>
</ul>
<h3>Split</h3>
<ul>
<li><b>At every joining word that starts a separate unit.</b> Mark every <i>and, or, because</i> (also <i>but, so, when, while, then, who, which</i>) when what follows has its own verb. That includes a run of actions.<div class="gex">she grabbed the test <span class="gcut">‖</span> and ran out <span class="gcut">‖</span> when she heard someone coming</div></li>
<li><b>The "in order to" test.</b> If you can replace "to" with "in order to", the purpose gets its own unit. If "to" is just a preposition, as in "went back to school", it stays.<div class="gex">amelia went back to school <span class="gcut">‖</span> to get her programming notebook</div></li>
<li><b>Scene-setting time and place phrases</b> at the front of a sentence get their own unit. The same phrase at the end of a clause stays.<div class="gex">One Friday night, <span class="gcut">‖</span> Amelia went back to school</div></li>
<li><b>Comments that aren't story content</b> ("I think", "I don't remember the rest") get their own unit so coders can mark them <i>Not in story</i>.</li>
</ul>
<h3>Don't split</h3>
<ul>
<li><b>Names stay with their verb.</b> <i>amelia went back to school</i> is one unit, never <i>amelia ‖ went back to school</i>. Coders can still tick #3 for the name.</li>
<li><b>Descriptions with names are the same unit.</b> <i>she talked to chrissy, her friend</i> and <i>a girl named Amelia</i> stay together.</li>
<li><b>"And" with no new verb.</b> <i>she knew it would be cheating and unfair to other students</i> is one unit.</li>
<li><b>Speech and letters.</b> Keep one line of speech, quoted or paraphrased, together, and keep a letter's words with it.<div class="gex">she got a letter from NMSU saying she was accepted</div></li>
<li><b>A verb and what completes it.</b> <i>decided to leave it</i>, <i>wanted to study computer science</i> and <i>knew that it was wrong</i> are one unit each ("in order to" doesn't fit).</li>
</ul>
<h3>Also</h3>
<ul>
<li>Don't fix spelling or grammar. Unitize what the participant wrote.</li>
<li>A cut-off ending ("got a letter back in mar") is its own unit.</li>
<li><b>When unsure, split.</b> Coders can match one unit to two story units, but they can't divide a unit that's too big.</li>
</ul></div>`,

  // Invented example responses loaded by "Try the demo". Nothing in the demo is saved.
  demo: [
 {id:"DEMO-01_s1",pid:"DEMO-01",session:"1",condition:"",text:"Amelia lived in a small town in New Mexico and she really wanted to study computer science. Her grades were bad so her only chance was a programming test from NMSU. One night she went back to school to get her notebook from her locker. She found an envelope with the test in it outside the office. She thought about taking it but she decided that it would be unfair to the other students. She left it there. In March she got a letter saying she was accepted and she cried because she was so happy."},
 {id:"DEMO-02_s1",pid:"DEMO-02",session:"1",condition:"",text:"A girl finds the answers to a test she needs to pass to get into college. She leaves them and gets in. That's all I remember."}
]
};
