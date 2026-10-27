const study = {
  updated: '28 October 2026',
  subjects: {
    els: {name: 'English Legal System & Constitutional Law', short: 'English Legal System', color: 'violet', course: 'https://elite.law.ac.uk/ultra/courses/_69897970_1/outline', guide: 'https://elite.law.ac.uk/ultra/courses/_69897970_1/document/_13365374_1?view=content&state=view', update: 'https://elite.law.ac.uk/ultra/courses/_69895682_1/file/_15840593_1?courseId=_69895682_1'},
    equity: {name: 'Equity & Trusts', short: 'Equity & Trusts', color: 'green', course: 'https://elite.law.ac.uk/ultra/courses/_69918164_1/outline', guide: 'https://elite.law.ac.uk/ultra/courses/_69918164_1/file/_17442112_1?courseId=_69918164_1', update: 'https://elite.law.ac.uk/ultra/courses/_69895682_1/file/_15840594_1?courseId=_69895682_1'}
  },
  sources: {
    library: {label:'ULaw textbook library', url:'https://elite.law.ac.uk/ultra/courses/_69916844_1/outline', type:'University login', why:'Open the assigned textbook through your account. Follow the directed reading within each unit; chapter numbers can change between editions.'},
    handbook: {label:'Student Handbook and Course Information', url:'https://elite.law.ac.uk/ultra/courses/_69895682_1/outline',type:'University login',why:'Assessment guidance, candidate instructions, criteria, practice materials and resitter updates.'},
    timetable: {label:'Official resit schedules',url:'https://elite.law.ac.uk/webapps/blackboard/content/listContent.jsp?course_id=_41214_1&content_id=_12650001_1',type:'University login',why:'Check dates against the latest schedule and your individual registration confirmation.'},
    proctor: {label:'Future proctoring guidance — January 2027 onward',url:'https://elite.law.ac.uk/ultra/courses/_69895682_1/file/_20854467_1?courseId=_69895682_1',type:'University login',why:'Future arrangements only. The November 2026 candidate instructions expressly say these resit examinations are not proctored and have no lockdown browser. Do not apply January 2027 restrictions to this November sitting.'},
    novemberInstructions:{label:'November 2026 candidate instructions',url:'https://elite.law.ac.uk/ultra/courses/_69895682_1/outline',type:'University login',why:'Student Handbook → Assessment Information → Candidate Instructions. The 27 October Assessment Office email attaches separate Coursework, OWE and SBAQ PDFs. These confirm November is open book and unproctored; use the current documents rather than older module formats.'},
    timeZoneForm:{label:'November 2026 time-zone request form',url:'https://forms.cloud.microsoft/pages/responsepage.aspx?id=8eZDEXRsh0Sw-0hOVesskBxoc0fEdZREpn5oKDtzYGpUREc5SlYwRFUzT0RaNkRURjNSOTFFOEJCVC4u&route=shorturl',type:'University login',why:'Closes 28 October at 17:00 UK time (29 October at 01:00 HKT). Request +8 or +16 hours for individual online exam components; no coursework adjustment. Submitting this form does not register a resit.'},
    sovereignty:{label:'Parliament: parliamentary sovereignty',url:'https://www.parliament.uk/about/how/role/sovereignty/',type:'Public source',why:'Institutional explanation of Parliament’s law-making authority and its constitutional setting.'},
    sovereigntyDetail:{label:'Commons Library: parliamentary sovereignty',url:'https://commonslibrary.parliament.uk/research-briefings/cbp-10377/',type:'Public source',why:'Further reading on orthodox sovereignty, constitutional statutes, interpretation and competing accounts.'},
    miller:{label:'Miller / Cherry [2019] UKSC 41',url:'https://www.bailii.org/uk/cases/UKSC/2019/41.html',type:'Judgment',why:'Read the reasoning on justiciability, parliamentary accountability, prerogative powers and the legal effect of unlawful prorogation.'},
    hra:{label:'Human Rights Act 1998, section 4',url:'https://www.legislation.gov.uk/ukpga/1998/42/section/4?timeline=false&view=plain+extent',type:'Legislation',why:'Read subsection (6) carefully: a declaration of incompatibility does not invalidate the legislation.'},
    euwa:{label:'European Union (Withdrawal) Act 2018',url:'https://www.legislation.gov.uk/ukpga/2018/16/contents',type:'Legislation',why:'Use the revised text, commencement information and annotations for the relevant date. Concentrate on sections 2–7A as directed in your textbook.'},
    reul:{label:'Retained EU Law (Revocation and Reform) Act 2023',url:'https://www.legislation.gov.uk/ukpga/2023/28/contents',type:'Legislation',why:'Track changes to retained/assimilated law. Distinguish an enacted provision from a provision actually brought into force.'},
    reulSI:{label:'Government collection of proposed REUL instruments',url:'https://www.gov.uk/government/collections/reul-revocation-and-reform-act-2023-statutory-instruments',type:'Public source',why:'Lists proposed negative statutory instruments laid for parliamentary sifting. It is not a complete commencement register; check the Act’s annotations and the relevant instrument separately.'},
    lpa:{label:'Law of Property Act 1925, section 53',url:'https://www.legislation.gov.uk/ukpga/Geo5/15-16/20/section/53?wrap=true',type:'Legislation',why:'Compare declarations of trusts of land, dispositions of subsisting equitable interests, and the exception for resulting/implied/constructive trusts.'},
    ta2000:{label:'Trustee Act 2000',url:'https://www.legislation.gov.uk/ukpga/2000/29/contents',type:'Legislation',why:'Read sections 1 and 3–5 on care, investment, suitability, diversification and advice; then the relevant delegation provisions.'},
    ta1925:{label:'Trustee Act 1925, section 61',url:'https://www.legislation.gov.uk/ukpga/Geo5/15-16/19/section/61?view=plain',type:'Legislation',why:'Conditions for the court to relieve a trustee from personal liability. Relief is discretionary.'},
    charity:{label:'Charity Commission: charitable purposes',url:'https://www.gov.uk/government/publications/charitable-purposes/charitable-purposes',type:'Public source',why:'Identify the statutory descriptions of charitable purposes without assuming that a description alone establishes charitable status.'},
    publicBenefit:{label:'Charity Commission: public benefit requirement',url:'https://www.gov.uk/government/publications/public-benefit-the-public-benefit-requirement-pb1/public-benefit-the-public-benefit-requirement',type:'Public source',why:'Read both the benefit aspect and the public aspect; compare with the cases assigned in Unit 3.'},
    mcphail:{label:'McPhail v Doulton [1970] UKHL 1',url:'https://www.bailii.org/uk/cases/UKHL/1970/1.html',type:'Judgment',why:'Certainty of objects in a discretionary trust. Separate the validity test from trustees’ administrative duties.'},
    jones:{label:'Jones v Kernott [2011] UKSC 53',url:'https://www.bailii.org/uk/cases/UKSC/2011/53.html',type:'Judgment',why:'Starting points for joint and sole legal ownership, common intention, and quantifying beneficial shares.'},
    guest:{label:'Guest v Guest [2022] UKSC 27',url:'https://supremecourt.uk/cases/uksc-2020-0107',type:'Judgment',why:'Proprietary estoppel and the design of relief. Read the judgment and distinguish majority and dissenting reasoning.'},
    fhr:{label:'FHR European Ventures v Cedar Capital [2014] UKSC 45',url:'https://www.supremecourt.uk/cases/uksc-2013-0049',type:'Judgment',why:'Secret commissions received by a fiduciary and the proprietary consequences.'},
    aib:{label:'AIB Group v Mark Redler [2014] UKSC 58',url:'https://www.supremecourt.uk/cases/uksc-2013-0052',type:'Judgment',why:'Equitable compensation and the connection between the breach and the loss claimed.'},
    foskett:{label:'Foskett v McKeown [2000] UKHL 29',url:'https://www.bailii.org/uk/cases/UKHL/2000/29.html',type:'Judgment',why:'Following, tracing, mixed substitution, ownership and proprietary remedies.'},
    byers:{label:'Byers v Saudi National Bank [2023] UKSC 51',url:'https://supremecourt.uk/cases/uksc-2022-0048',type:'Judgment',why:'Knowing receipt and the need for a continuing equitable proprietary interest. Useful additional reading; confirm its place in your assigned syllabus.'},
    armitage:{label:'Armitage v Nurse [1997] EWCA Civ 1279',url:'https://www.bailii.org/ew/cases/EWCA/Civ/1997/1279.html',type:'Judgment',why:'Trustee exemption clauses: construction, negligence and the irreducible obligation to act honestly and in good faith for beneficiaries.'},
    ivey:{label:'Ivey v Genting Casinos [2017] UKSC 67',url:'https://www.supremecourt.uk/cases/uksc-2016-0213',type:'Judgment',why:'Paragraph 74 states the approach to dishonesty: establish actual knowledge or belief about facts, then apply ordinary standards. Read its discussion of civil dishonest assistance.'},
    akindele:{label:'BCCI v Akindele [2000] EWCA Civ 502',url:'https://www.bailii.org/ew/cases/EWCA/Civ/2000/502.html',type:'Judgment',why:'Knowing receipt: the recipient’s knowledge must make retention of the benefit unconscionable. Read together with Byers on the proprietary requirement. If BAILII blocks access, locate the citation through the university library.'},
    judgments:{label:'Find Case Law — The National Archives',url:'https://caselaw.nationalarchives.gov.uk/',type:'Research tool',why:'Locate primary judgments by case name or neutral citation. Use the course database for older authorities outside this collection.'}
  },
  units: [
    {id:'els-1',subject:'els',number:1,title:'The legal system and statutory interpretation',summary:'Start with the legal source, the institution applying it, and the words Parliament enacted.',
      notes:[['Map the source','Separate primary legislation, delegated legislation and case law. A minister’s power to make a statutory instrument comes from an enabling Act; its scope, procedure and purpose must be identified before discussing validity. Distinguish civil and criminal proceedings, first-instance decisions and appeals.'],['Read the provision in context','Begin with the actual words, definitions, exceptions, surrounding provisions and statutory purpose. The literal approach gives words their ordinary meaning in context; the golden approach avoids an absurd result; the mischief approach asks what defect the legislation sought to remedy. A purposive reading focuses on the statutory objective. These are teaching labels rather than automatic commands: explain the competing interpretations and why one fits this statute. Consider permitted internal and external aids rather than treating a dictionary as conclusive.'],['Apply rather than recite','Identify the ambiguous word and show how each plausible reading changes the outcome. Explain whether a presumption or a special interpretive duty is relevant. Under the Human Rights Act, interpretation and a declaration of incompatibility are different mechanisms.']],
      checklist:['Identify the exact provision and applicable date.','Check definitions, exceptions and the enabling power.','Compare two plausible readings against context and purpose.','State the legal consequence of the preferred reading.'],trap:'Do not assume a ministerial announcement changes legislation, or that every interpretive problem has one mechanical “rule”.',sources:['hra','judgments'],recall:['Why must you read the enabling Act before challenging a statutory instrument?','It identifies the legal power, its limits and any procedural conditions. A statutory instrument cannot simply be treated as another Act of Parliament.']},
    {id:'els-2',subject:'els',number:2,title:'Case law and precedent',summary:'A case matters for the legal proposition necessary to decide it, within a particular court hierarchy.',
      notes:[['Find the ratio','Separate material facts, issue, decision and the reasoning needed for that decision. That reasoning supplies the ratio; observations unnecessary to the result are normally obiter. A proposition does not become binding merely because it sounds authoritative or appears in a headnote.'],['Check the court and the match','For England and Wales, Supreme Court decisions bind lower courts; Court of Appeal decisions bind the High Court and lower courts. The Court of Appeal normally follows its own decisions, subject to recognised exceptions; the Supreme Court may depart from its own precedent when appropriate. Check the civil/criminal context and any relevant exception. Ask whether the material facts and legal issue match. Distinguishing accepts the earlier rule but explains a material difference. Overruling changes the legal authority of an earlier decision; reversing changes the result on appeal in the same litigation.'],['Use judgments carefully','Read the majority reasoning, not just the outcome. Where several judgments agree on the result, identify the proposition supported by the necessary majority. Persuasive authority can help when no binding rule resolves the issue, but its weight needs explanation.']],
      checklist:['Record court, year and neutral citation.','Write the ratio in one sentence.','Identify which facts made a difference.','Explain whether the authority is binding, persuasive or distinguishable.'],trap:'An appeal succeeding does not mean every argument made by the appellant became law.',sources:['miller','judgments'],recall:['How does distinguishing differ from overruling?','Distinguishing treats a material factual or legal difference as taking the new case outside the earlier rule. Overruling rejects the earlier rule as an authority.']},
    {id:'els-3',subject:'els',number:3,title:'The UK constitution',summary:'Build a map of institutions and sources before debating the limits of their power.',
      notes:[['An uncodified constitution','The constitution is found across statutes, common law, conventions and institutional practice rather than in a single comprehensive constitutional code. “Uncodified” does not mean wholly unwritten or legally unenforceable.'],['Law and convention','A convention can regulate how a legal power is normally exercised without itself creating an enforceable legal rule. Identify the legal power first and then any convention governing its use. Courts can recognise a convention while declining to enforce it as law.'],['Locate the institution','Distinguish Parliament, government and courts; then distinguish UK institutions from devolved institutions. Questions about executive competence, legislative competence and political accountability ask different things. A treaty obligation and a rule enforceable in domestic courts also need separate analysis.']],
      checklist:['Name the institution and the power involved.','Classify each constitutional source.','Separate a legal constraint from a political convention.','Identify the forum and possible legal remedy.'],trap:'Do not use “government” and “Parliament” interchangeably.',sources:['sovereignty','sovereigntyDetail','miller'],recall:['Does recognising a constitutional convention mean a court will enforce it?','No. Recognition and legal enforcement are separate questions; explain the source and character of the alleged obligation.']},
    {id:'els-4',subject:'els',number:4,title:'Separation of powers and the rule of law',summary:'Ask who has power, what constrains it, and how its exercise can be reviewed.',
      notes:[['Separation with checks','The UK system contains overlap between legislature and executive, alongside judicial independence and mechanisms of accountability. Analyse the particular overlap or safeguard rather than asserting a complete institutional separation.'],['Rule-of-law analysis','Consider legal authority, clarity and predictability, equality before the law, access to courts, procedural fairness and control of arbitrary power. Different accounts emphasise formal legality or wider substantive rights. Identify which account is being used and connect it to the facts.'],['Political context does not decide justiciability','A politically important dispute can still raise a legal question. In Miller/Cherry the court examined legal limits on prorogation through parliamentary sovereignty and accountability. Keep the existence of a reviewable legal standard separate from whether the decision breached that standard.']],
      checklist:['Identify the legal source of power.','Identify the accountability mechanism.','State a reviewable legal standard.','Explain the specific effect on courts, Parliament or individuals.'],trap:'Do not claim that every unfair policy automatically violates an enforceable legal rule.',sources:['miller','hra'],recall:['What two questions should you separate in a prerogative challenge?','Whether the matter is justiciable, and whether the exercise of the power is lawful under the relevant legal standard.']},
    {id:'els-5',subject:'els',number:5,title:'Parliamentary supremacy',summary:'Keep the orthodox rule, statutory exceptions and constitutional debate in separate parts of your answer.',
      notes:[['The orthodox starting point','Parliament can enact or repeal legislation, and an earlier Parliament generally cannot prevent a later Parliament changing the law. Courts ordinarily apply valid Acts rather than striking them down because they disagree with their policy. Distinguish this from review of delegated legislation or executive action.'],['Express and implied repeal','Express repeal states the change. Implied repeal concerns inconsistency between enactments. Constitutional statutes and special statutory regimes complicate a simple “latest Act always wins” account; use the authorities assigned in your unit and identify the exact conflict.'],['Evaluate carefully','Separate a court’s binding decision from judicial speculation about extreme cases. Explain how interpretation, human-rights declarations, devolution and withdrawal arrangements interact with sovereignty without claiming that they all permit the same remedy.']],
      checklist:['Classify the challenged measure.','Identify earlier and later statutory provisions.','Explain repeal and any constitutional-statute issue.','Distinguish orthodox doctrine from contested reform or dicta.'],trap:'A Human Rights Act declaration of incompatibility does not repeal or invalidate the provision.',sources:['sovereignty','sovereigntyDetail','hra'],recall:['Does a declaration under section 4 HRA invalidate the Act?','No. Section 4(6) preserves validity, continuing operation and enforcement.']},
    {id:'els-6',subject:'els',number:6,title:'Parliamentary privilege and devolution',summary:'Privilege protects parliamentary functions; devolution distributes statutory competence.',
      notes:[['Identify the protected activity','For privilege, ask whether the conduct falls within protected proceedings and which aspect of privilege is asserted. The existence and scope of protection are legal questions. Do not assume that anything an MP does, anywhere, is immune from ordinary law.'],['Read the competence scheme','For devolution, identify the relevant nation, institution and statutory settlement. Distinguish devolved and reserved matters, and analyse the purpose and effect of legislation against the statutory competence limits.'],['Convention versus statutory restriction','The Sewel convention and statutory limits on devolved competence are different. When the course update identifies a consent requirement in a particular Act, read the precise provision, its exceptions and who must consent; do not convert it into a general veto over all UK legislation.']],
      checklist:['Identify the proceeding or legislative act.','State the relevant legal source and territorial settlement.','Separate convention, procedure and competence.','Specify the legal consequence and court’s role.'],trap:'An act outside a devolved legislature’s competence is analytically different from an incompatible Westminster Act.',sources:['miller','sovereigntyDetail','judgments'],recall:['Why is “the devolved government did not consent” not a complete legal answer?','You must identify whether consent is required by enforceable statute, convention, or neither, and apply the exact provision and exceptions.']},
    {id:'els-7',subject:'els',number:7,title:'EU law foundations and domestic reception',summary:'Use a timeline: the origin of the rule, its domestic gateway and the date of the dispute.',
      notes:[['Classify the EU source','Revise the institutions and the distinction between treaties, regulations, directives and case law as taught in the unit. Direct applicability and direct effect answer different questions: how a rule enters a legal system and whether an individual can invoke a sufficiently clear legal obligation.'],['Separate historical and present regimes','The position during UK membership, the transition period and the post-transition domestic framework cannot be merged. A historical rule on EU supremacy is not a complete statement of today’s domestic position.'],['Build a source-to-remedy chain','For a problem, identify the legal instrument, relevant date, party against whom it is invoked and domestic statutory route. Explain which rule determines interpretation or priority and what remedy is actually available.']],
      checklist:['Date the legal event.','Identify the EU instrument and its type.','Identify the domestic statutory route.','Check whether a special withdrawal-agreement regime applies.'],trap:'Do not treat the EU, the Council of Europe and the ECHR as the same organisation or legal system.',sources:['euwa','reul','reulSI'],recall:['Why begin an EU-law problem with the date?','Different domestic regimes apply before and after withdrawal and later reforms. The same label can conceal different rules on priority, interpretation and remedies.']},
    {id:'els-8',subject:'els',number:8,title:'Retained and assimilated law',summary:'First identify what was preserved; then ask which later reforms affect it.',
      notes:[['The preservation exercise','Study the European Union (Withdrawal) Act’s separate routes for domestic EU-derived legislation and direct EU legislation, together with the course’s treatment of other preserved rights. A preserved rule remains subject to relevant amendment or revocation.'],['The reform exercise','The 2023 Act changed terminology and aspects of the former special status of retained EU law. “Assimilated law” does not mean every EU-related rule disappeared. Work from the statute and course update, including transitional provisions and any special regime.'],['Make a comparison table','For each category record its source, domestic legal status, amendment route, interpretive rules and conflict rules at the relevant date. Read the revised provisions and annotations rather than an outdated summary.']],
      checklist:['Classify the preserved rule.','Check amendment or revocation.','Check the relevant commencement date.','Explain status, interpretation and priority separately.'],trap:'Royal Assent and commencement are different events; do not assume every provision in the 2023 Act is in force.',sources:['euwa','reul','reulSI'],recall:['Does renaming retained EU law as assimilated law itself tell you whether a particular rule survives?','No. Check the preservation route, subsequent repeal or amendment, commencement and applicable special arrangements.']},
    {id:'els-9',subject:'els',number:9,title:'Assimilated law in the courts and current updates',summary:'Practise navigating the applicable version of the law rather than memorising an old Brexit diagram.',
      notes:[['Case-law status','Distinguish pre-transition EU case law, later EU decisions, domestic appellate precedent and the statutory rules on departure. The power to depart is not a general freedom for every court to ignore an inconvenient authority.'],['Course update priorities','Read the ULaw English resitter update through its 2026–27 section. It flags assimilated-law changes, commencement issues, Lipton, product-regulation/devolution questions and the Windsor Framework. Use the update as an index into primary sources, and verify the relevant version and examinable date.'],['A reliable answer structure','Identify date and category; state the governing domestic provision; classify the precedent; explain whether the court is bound or may depart; address any withdrawal-agreement rule; conclude with the legal consequence. If a proposition is disputed or obiter, say so.']],
      checklist:['Read textbook chapter 9 as directed in the update, checking your edition.','Update your old notes rather than attaching a second contradictory summary.','Record whether a cited statement is ratio or obiter.','Recheck changes against the academic-year cutoff.'],trap:'The existence of a later EU judgment does not automatically make it binding in UK domestic proceedings.',sources:['euwa','reul','reulSI','judgments'],recall:['What should an authority note record beyond the case name?','Court, date, ratio, material facts, current status, any statutory framework and whether the proposition relied on was necessary to the result.']},
    {id:'eq-1',subject:'equity',number:1,title:'Trusts and beneficial interests',summary:'Separate who controls the legal title from who benefits in equity.',
      notes:[['The three roles','The settlor establishes the arrangement, the trustee holds and administers the property, and the beneficiary enjoys the equitable entitlement. A trust is an obligation concerning identified property, not simply a promise to be generous. Legal and beneficial ownership can therefore sit with different people.'],['Classify the interest','A fixed trust determines entitlement under its terms; a discretionary trust gives trustees a discretion over distribution within a class. Distinguish vested and contingent interests, interests in possession and future interests. Read the exact words and any gift over before deciding who is entitled.'],['Ending the arrangement','Revise Saunders v Vautier using the assigned text. Ask whether all persons beneficially entitled are ascertained, adult and capable, and together absolutely entitled. A single beneficiary cannot ignore other beneficial interests, contingencies or persons whose consent is needed.']],
      checklist:['Identify each person’s role and the asset.','Draw the legal and beneficial interests separately.','Classify the interests and any conditions.','Check all interests before considering termination.'],trap:'A discretionary object does not automatically own a fixed fraction of each trust asset.',sources:['library','lpa'],recall:['Can one adult beneficiary automatically demand the whole fund?','No. Identify every beneficial interest and apply the conditions for collective absolute entitlement under the relevant rule.']},
    {id:'eq-2',subject:'equity',number:2,title:'Creating express trusts',summary:'Validity, formality and constitution are separate gates. Passing one does not pass the others.',
      notes:[['The three certainties','Intention: objectively construe words and conduct for a binding obligation, rather than a mere wish; no technical word is essential. Subject matter: identify the trust property and beneficial shares. Objects: a fixed trust normally requires a complete list of beneficiaries. For a discretionary trust, McPhail applies the test whether a given person is or is not within the class. A mere power uses a similar individual-membership test, but different administrative obligations follow. Conceptual uncertainty concerns the meaning of the class; evidential uncertainty concerns proof of membership. Also consider administrative unworkability or capriciousness where applicable.'],['Formalities','For land, distinguish a declaration of trust from a transfer of legal title. Section 53(1)(b) concerns signed evidence of a declaration respecting land; section 53(1)(c) concerns dispositions of existing equitable interests. Resulting, implied and constructive trusts are treated separately under section 53(2). Wills and asset transfers have their own requirements.'],['Constitution','Identify the intended method: transfer to trustees, self-declaration, or an outright gift. Check whether the required transfer steps were completed. Equity does not generally complete an imperfect voluntary gift, but the assigned authorities contain specific exceptions; do not treat “unconscionability” as an unrestricted rescue device.']],
      checklist:['Classify the intended disposition.','Apply each certainty separately.','Check formality rules for this asset and transaction.','Check constitution and only then any recognised exception.'],trap:'A document containing the word “trust” does not cure an uncertain asset or an incomplete transfer.',sources:['lpa','mcphail'],recall:['What is the difference between certainty and constitution?','Certainty concerns whether the trust’s obligation, property and objects are sufficiently defined. Constitution concerns whether the property has been vested as required or a valid self-declaration made.']},
    {id:'eq-3',subject:'equity',number:3,title:'Purpose trusts and charities',summary:'A purpose needs a recognised route to validity, not merely a worthy description.',
      notes:[['The beneficiary principle','An ordinary private trust generally needs identifiable beneficiaries who can enforce it. Non-charitable purpose trusts face this obstacle and additional restrictions. Learn the narrow exceptions and their limits from the unit, rather than inventing a broad “useful purpose” exception.'],['Charitable purposes','A charitable purpose must fall within a recognised statutory description and satisfy public benefit. Analyse benefit and the section of the public benefited; consider restrictions, private benefit and any problematic non-charitable purpose. Do not assume that education or religion automatically establishes public benefit.'],['Trusts in insolvency','For restricted-purpose money and Quistclose-type arrangements, ask whether the recipient could use the money freely, what restriction was intended, how the funds were handled and what happens on failure of purpose. Explain how proprietary status affects creditors. Policy evaluation should acknowledge both protection of the payer and effects on the insolvency distribution scheme.']],
      checklist:['Identify purpose or persons.','Check charity and public benefit separately.','Consider any narrow non-charitable exception.','For restricted payments, analyse intention and the permitted use of funds.'],trap:'A restricted contractual payment does not invariably create a trust.',sources:['charity','publicBenefit','library'],recall:['Is falling within a charitable-purpose description enough?','No. The purpose must also satisfy public benefit and the arrangement must meet the other requirements for charitable status.']},
    {id:'eq-4',subject:'equity',number:4,title:'Implied trusts and proprietary estoppel',summary:'Choose the legal route before deciding the share or remedy.',
      notes:[['Resulting trusts','An automatic resulting trust may arise where an express trust leaves beneficial ownership undisposed of. A presumed resulting trust can arise on certain voluntary transfers or purchase-money contributions where no gift was intended, subject to applicable presumptions and contrary evidence. Identify who supplied the purchase price and when. Do not mechanically import purchase-money reasoning into a domestic joint-name family-home dispute.'],['Family-home constructive trusts','Start with the legal title and any express declaration. In a domestic joint-name purchase, the starting point is joint beneficial ownership; contrary common intention can rebut it. In a sole-name case, the starting point is sole beneficial ownership, and the claimant must establish the relevant common intention and detrimental reliance for the constructive-trust route. Separate acquisition from quantification: inferred intention and, at the proper stage, imputed shares have distinct roles. Examine the parties’ whole course of dealing and the assigned authorities; do not award shares merely because a result seems fair. Jones v Kernott is a useful route into these distinctions.'],['Proprietary estoppel','Identify assurance, reliance and detriment, considered in their full context, and explain unconscionability. Establishing an equity and deciding the remedy are separate stages. Guest v Guest is useful on relief; a promise does not automatically give the claimant immediate ownership of everything promised.']],
      checklist:['Check the title and express declaration.','Choose resulting trust, constructive trust or estoppel.','Prove the elements before quantifying relief.','Explain evidence, alternatives and uncertainties.'],trap:'Contribution, fairness and ownership are not interchangeable concepts.',sources:['jones','guest','lpa'],recall:['Why separate acquisition from quantification?','The claimant must first establish an interest under the appropriate doctrine; only then does the question of the size of that interest arise.']},
    {id:'eq-5',subject:'equity',number:5,title:'Trustees’ duties and powers',summary:'A power authorises an act; a duty governs how it must be considered or performed.',
      notes:[['Read the trust instrument first','Identify the power relied on, any express restriction and the statutory default. Distinguish investment, delegation, maintenance, advancement, appointment and administrative decisions. Having a power does not establish that it was properly exercised.'],['Investment and care','The Trustee Act 2000 provides a statutory care framework where applicable and a general investment power, subject to the instrument and statutory limits. Section 1 requires reasonable care and skill, taking account of special knowledge or experience and professional status. Section 4 requires consideration of suitability and the need for diversification so far as appropriate, plus periodic review. Section 5 normally requires proper advice before investment and on review, unless the trustee reasonably concludes that it is unnecessary or inappropriate. Read the precise statutory scope and exceptions. Analyse the decision-making process and context rather than equating a disappointing return with breach.'],['Administration and supervision','Keep accounts, relevant information and the interests of beneficiaries in view. If delegation is authorised, examine selection, scope and review; delegation is not necessarily an escape from responsibility. Where authority is uncertain, consider the available route to directions or appropriate consent before treating the act as valid.']],
      checklist:['Identify the source and scope of power.','Check the applicable standard of care.','Apply the procedural and substantive duties.','Connect any breach to a claim and remedy.'],trap:'An investment losing value does not by itself prove negligent administration.',sources:['ta2000','library'],recall:['Why distinguish a power from its exercise?','The transaction can fall within the trustee’s authority yet be carried out in breach of a duty of care, loyalty or proper consideration.']},
    {id:'eq-6',subject:'equity',number:6,title:'Fiduciary duties',summary:'Loyalty, conflicts and unauthorised profits require a different analysis from careless administration.',
      notes:[['Identify the undertaking','Explain why this defendant owes fiduciary obligations and the scope of the relationship. Not every duty owed by a trustee or professional is fiduciary in character. Separate loyalty questions from negligence and contractual performance.'],['Conflicts and profits','Analyse conflicts between duty and interest or between competing duties, and profits obtained by reason of the fiduciary position. Honest motives or the absence of a loss do not alone answer a strict loyalty claim. Check valid authorisation and fully informed consent, including whose consent was necessary.'],['Consequences and evaluation','Compare an account of profits, proprietary relief and compensation. FHR is important for secret commissions. Armitage v Nurse permits an appropriately drafted clause to exclude liability for negligence, including gross negligence, but recognises an irreducible obligation to act honestly and in good faith for beneficiaries. A trustee cannot exclude liability for their own fraud/dishonesty. Construction, the precise claim and other applicable rules still matter: a personal-liability exclusion is not automatically an answer to recovering property from a conflicted transaction. Evaluate professional accountability separately from the rule of current law.']],
      checklist:['Identify fiduciary relationship and scope.','Classify conflict, profit or non-fiduciary breach.','Check authorisation and informed consent.','Choose the remedy that addresses the wrong.'],trap:'“The trust lost nothing” does not necessarily defeat a claim for an unauthorised fiduciary profit.',sources:['fhr','armitage','library'],recall:['Can an unauthorised profit matter even without a loss to the beneficiary?','Yes. A profit-based response protects loyalty; it is analytically distinct from compensation for loss.']},
    {id:'eq-7',subject:'equity',number:7,title:'Remedies against trustees and fiduciaries',summary:'Identify the wrong, then separate loss, gain and ownership responses.',
      notes:[['Personal relief','For compensation, identify the duty, breach, loss and required causal connection. AIB helps explain why the measure cannot be chosen without considering what the duty protected against. For an account of profits, focus on the unauthorised gain and relevant allowances or limits.'],['Proprietary relief and tracing','Identify the claimant’s proprietary base and follow the transactions. Following concerns the same asset; tracing identifies a substitute representing its value. Tracing is a process, not a free-standing cause of action. Consider mixed funds, substitutions, dissipation and intervening purchasers before selecting an ownership claim or lien.'],['Defences and limits','Consider authorisation, informed consent, exemption provisions, limitation and statutory relief where applicable. Under section 61 Trustee Act 1925 the trustee must have acted honestly and reasonably and ought fairly to be excused for the breach and for omitting to obtain court directions; relief remains discretionary. Distinguish a defence to personal liability from loss of a proprietary claim. Avoid double recovery.']],
      checklist:['List each transaction chronologically.','Separate personal and proprietary claims.','Trace value before specifying the asset claimed.','Check defences, relief and recovery already received.'],trap:'A successful tracing exercise does not itself establish the claimant’s entitlement to a particular remedy.',sources:['aib','foskett','ta1925'],recall:['Why might proprietary relief matter if the trustee is insolvent?','A valid proprietary claim concerns identified property rather than only an unsecured personal debt, subject to the applicable tracing rules and defences.']},
    {id:'eq-8',subject:'equity',number:8,title:'Claims against third parties',summary:'Receipt, assistance and ownership are three different routes; do not collapse them into “constructive trustee”.',
      notes:[['Proprietary recovery','If property or traceable substitutes remain, ask whether the claimant’s equitable interest persists and binds the holder. A bona fide purchaser for value of the legal interest without notice can defeat an equitable proprietary claim. An innocent volunteer is not automatically in the same position.'],['Knowing receipt','Identify a disposal in breach of trust or fiduciary duty and beneficial receipt of the relevant assets. Under Akindele, the recipient’s state of knowledge must make retention of the benefit unconscionable; do not replace that inquiry with a bare allegation that they ought to have been more careful. Byers also requires a continuing equitable proprietary interest: knowledge cannot restore an interest extinguished under the applicable law. Distinguish personal knowing-receipt liability from a proprietary recovery claim.'],['Dishonest assistance','Establish an underlying breach of trust or fiduciary duty, assistance by this defendant and dishonesty. The trustee need not themselves be dishonest, and the assistant need not receive trust property. For dishonesty, first establish the defendant’s actual knowledge or belief about the facts; then judge the conduct against ordinary standards of honest people (Ivey). The defendant need not appreciate that those standards condemn the conduct. Apply this to the actual assistance, rather than importing knowing receipt’s receipt requirement.']],
      checklist:['Identify the third party’s actual conduct.','Separate receipt from assistance.','For recovery of assets, establish title and tracing.','Apply the right mental element and defence to each claim.'],trap:'A person can assist without receiving property; a recipient can hold property without having assisted the breach.',sources:['byers','akindele','ivey','foskett'],recall:['Must a dishonest assistant receive trust property?','No. Assistance and dishonesty are the relevant focus; beneficial receipt belongs to the separate knowing-receipt analysis.']}
  ],
  feynman:[
    ['Trust ownership','Imagine a librarian holding a book that must be kept for a particular reader. Control and benefit can be separated.','The analogy has limits: a beneficiary’s equitable interest is a legal property concept, not merely a promise to let someone borrow a book.','Identify legal title, equitable interest, the asset and the trustee’s enforceable obligations.'],
    ['Parliament and government','A rule-maker and a person authorised to carry out rules are different roles. The authorised person must stay inside the permission given.','The constitution is more complex than a school rulebook: primary legislation, prerogative, common law and conventions have distinct sources and effects.','Classify the institution and legal source of power before discussing review or remedies.'],
    ['Tracing','If someone uses money to buy a bicycle and later swaps it for a camera, tracing asks which new asset represents the original value.','The ability to identify value does not settle legal ownership, mixed-fund rules or purchaser defences.','Establish a proprietary base, prove transactional substitutions and then determine the available claim and remedy.'],
    ['Precedent','The lesson from an earlier decision depends on the reason that made the court decide it that way, not on every sentence the judge spoke.','Unlike a casual example, legal precedent operates within a court hierarchy and statutory context.','Identify ratio, material facts, court, binding status and any legitimate distinction.']
  ],
  exercises:[
    {tier:'Recall',q:'Name the three certainties and explain why constitution is a separate issue.',a:'Intention, subject matter and objects. Constitution asks whether property was vested as required or a valid self-declaration made; precise trust terms do not themselves complete a transfer.'},
    {tier:'Recall',q:'What are the two aspects of public benefit in charity guidance?',a:'The benefit aspect and the public aspect. A recognised description of charitable purpose does not create an automatic presumption that both are satisfied.'},
    {tier:'Recall',q:'Distinguish ratio, obiter and the case’s outcome.',a:'Outcome is the disposition of the litigation. Ratio is the necessary legal reasoning supporting the decision. Obiter is reasoning or observation not necessary to it; it may be persuasive.'},
    {tier:'Recall',q:'What does section 4(6) HRA preserve after a declaration?',a:'The validity, continuing operation and enforcement of the provision. It also states that the declaration is not binding on the parties to the proceedings in which it is made.'},
    {tier:'Application',q:'A trustee buys an investment within a statutory power, but never considers suitability or advice. What questions arise?',a:'Separate authority from proper exercise. Read the trust instrument, apply the relevant Trustee Act 2000 investment and care duties, consider whether advice was required or an exception applied, then analyse breach, loss and relief.'},
    {tier:'Application',q:'A fiduciary takes a secret commission, but the client obtained a good deal. Is the lack of loss decisive?',a:'No. Analyse loyalty, authorisation and fully informed consent, then profit-based and proprietary responses. FHR is a primary reading. Do not assume compensation is the only remedy.'},
    {tier:'Application',q:'One partner’s name is on the title and the other seeks a beneficial share. How do you structure the answer?',a:'Check an express declaration first; identify the sole-name starting point; consider the appropriate route to establish an interest with its evidential requirements; only then quantify. Consider estoppel separately if the facts support it.'},
    {tier:'Application',q:'A trial judge thinks an earlier appellate judgment was mistaken. Can the judge simply ignore it?',a:'Identify the ratio, court hierarchy, statutory context and material facts. A genuine distinction may matter; disagreement alone does not normally remove binding force.'},
    {tier:'Application',q:'An EU-derived rule is described in 2026 as “retained”. What should you check before using it?',a:'Identify the instrument, relevant date and preservation category; check subsequent amendment/revocation and commencement; apply the current domestic interpretation and conflict rules and any special withdrawal regime.'},
    {tier:'Synthesis',q:'Why can a proprietary claim and a personal compensation claim produce different outcomes in insolvency?',a:'The first concerns a continuing interest in identified property or substitutes, subject to defences. The second seeks payment from the defendant personally. Explain proprietary basis, tracing, creditor position and the prohibition on double recovery.'},
    {tier:'Synthesis',q:'Evaluate the use of trustee exemption clauses without assuming they are all effective or ineffective.',a:'Identify wording, duty, alleged breach and legal limits; then weigh beneficiary protection, risk allocation, costs, insurance and professional accountability. Use assigned primary authorities and distinguish current law from reform proposals.'},
    {tier:'Synthesis',q:'How can an uncodified constitution still impose enforceable legal limits?',a:'Distinguish the form of the constitution from the legal force of its sources. Statutes and common-law rules can supply enforceable limits; conventions raise a separate issue. Illustrate with a specific institution, power and remedy.'},
    {tier:'Synthesis',q:'Why is “fairness” insufficient as the sole explanation for a trust or remedy?',a:'Different doctrines have defined elements, property consequences and third-party effects. Establish the applicable doctrine and its facts, then identify the lawful scope of judicial discretion rather than creating a result from sympathy.'}
  ],
  planner:[
    ['2026-10-26','Read the November instructions and locate the original coursework title; resolve any conflicting individual advice before writing. Equity Units 1–2.'],
    ['2026-10-27','Resolve the coursework-title conflict with Assessment Office; check the current word-limit rule. Decide whether a time-zone request is useful. Equity Unit 3.'],
    ['2026-10-28','If needed, submit the time-zone form before 17:00 UK (01:00 HKT on 29 Oct). Write independently once the title is confirmed. Equity Unit 4.'],
    ['2026-10-29','Continue coursework on the confirmed title. Equity Units 5–6; check any time-zone confirmation and correct ELITE assessment links.'],
    ['2026-10-30','Complete coursework draft. Equity Unit 7; one mixed SBA set.'],
    ['2026-10-31','Edit coursework against criteria and references. Equity Unit 8.'],
    ['2026-11-01','Final independent checks and target coursework submission; save the receipt. Short Equity recall.'],
    ['2026-11-02','Coursework must be submitted before 17:30 HKT; no time-zone adjustment applies. Verify submission; review Equity weak areas.'],
    ['2026-11-03','Timed Equity written practice with specimen Points to Note; mixed SBA questions.'],
    ['2026-11-04','Repair weak areas; rehearse issue spotting and the permitted technical setup.'],
    ['2026-11-05','Equity advance documentation releases at 17:30 HKT. Read, research and organise Part A issues; keep revision concise and rest.'],
    ['2026-11-06','Standard times: Equity SBA starts 17:30 HKT; written starts 21:30, stop writing 23:30 and submit before 23:45. Adjust only if your individual request applies.'],
    ['2026-11-07','ELS Units 1–6 mixed SBA practice; explain each wrong answer.'],
    ['2026-11-08','ELS Units 7–9 and resitter updates; one timed 20-question set.'],
    ['2026-11-09','Standard ELS SBA starts 17:30 HKT; 45 minutes answering. Use a different date/time only if your individual adjustment applies.']
  ]
};

// Dated requirements and suggested revision are kept separate; no task implies submission.
study.timeline = {
  "checkedAt": "2026-10-28T01:05:00+08:00",
  "latestEmail": "28 October 2026 · 00:18 HKT",
  "summary": "The latest Assessment Office reply directs students to the candidate instructions for the coursework word limit. It does not settle the original-title versus new-paper conflict. The current plan retains that clarification task and the November PDF rules. All four November assessment courses are now linked directly. The ELS coursework Word Answer Booklet is available; the Equity written course currently has no released content. Check academic-conduct completion and the pre-assessment checklist.",
  "monitor": "Daily mailbox check and website update scheduled for 18:00 HKT through 19 January 2027. Runs need this computer and Codex available, plus working university sign-in. Check the timestamp above for the last successful review.",
  "resources": {
    "cw": {
      "label": "November coursework instructions",
      "url": "https://outlook.cloud.microsoft/mail/inbox",
      "file": "2627 PgDL MA Assessments - Coursework - Candidate instructions - Nov 26.pdf",
      "note": "Email attachment: Assessment Office, 27 October, “Important: Candidate Instructions for the October/November Resit Assessment Period”. Open the university inbox and find this message. This button opens mail, not a direct PDF download."
    },
    "owe": {
      "label": "November written-exam instructions",
      "url": "https://outlook.cloud.microsoft/mail/inbox",
      "file": "2627 PgDL MA Assessments - OWE - Candidate instructions - Nov 26.pdf",
      "note": "Same 27 October candidate-instructions email; open the OWE attachment. This button opens mail, not a direct PDF download."
    },
    "sba": {
      "label": "November SBA instructions",
      "url": "https://outlook.cloud.microsoft/mail/inbox",
      "file": "2627 PgDL MA Assessments - SBAQ - Candidate instructions - Nov 26.pdf",
      "note": "Same 27 October candidate-instructions email; open the SBAQ attachment. This button opens mail, not a direct PDF download."
    },
    "mail": {
      "label": "University inbox",
      "url": "https://outlook.cloud.microsoft/mail/inbox",
      "note": "Use your university account. Check replies and any individual adjustment or access instructions."
    },
    "courses": {
      "label": "ELITE assessment courses",
      "url": "https://elite.law.ac.uk/ultra/course",
      "note": "Find your November resit courses. The SBA and written/coursework components use separate courses. Choose standard or adjusted links according to your own valid request; this is the course list, not a submission box."
    },
    "mock": {
      "label": "Practice Word Answer Booklet",
      "url": "https://elite.law.ac.uk/ultra/courses/_69895682_1/file/_13854720_1?courseId=_69895682_1",
      "file": "pgdlma_answer_booklet_mock_assessment.docx",
      "note": "University login. For practice only; use the actual assessment-specific Answer Booklet for the real submission."
    },
    "criteria": {
      "label": "Level 7 assessment criteria",
      "url": "https://elite.law.ac.uk/ultra/courses/_69895682_1/file/_12678752_1?courseId=_69895682_1",
      "note": "University login. Check analysis, application, structure and authority against the criteria."
    },
    "writing": {
      "label": "Written-exam technique recording",
      "url": "https://eu-lti.bbcollab.com/recording/1f731c4a29134185946cf92e61a269c3",
      "note": "“Unlocking Success Series – Online Written Examination Assessment Technique Recording”, linked in your handbook."
    },
    "notes": {
      "label": "All topic notes",
      "url": "#notes",
      "note": "Original revision notes. Open the linked unit and follow its directed reading."
    },
    "practice": {
      "label": "Practice and explain",
      "url": "#practice",
      "note": "Original revision exercises and six-question warm-up; not an official 20-question mock."
    },
    "recall": {
      "label": "Recall cards",
      "url": "#recall",
      "note": "Try the answer from memory before revealing it."
    },
    "elsCourse": {
      "label": "ELS course: directed reading and SBA practice",
      "url": "https://elite.law.ac.uk/ultra/courses/_69897970_1/outline",
      "note": "University login. Open the named unit’s Prepare, Engage and Consolidate tasks."
    },
    "eqCourse": {
      "label": "Equity course: reading, specimen and Points to Note",
      "url": "https://elite.law.ac.uk/ultra/courses/_69918164_1/outline",
      "note": "University login. Open unit reading / Consolidate; locate the specimen assessment and Points to Note."
    },
    "elsGuide": {
      "label": "ELS module assessment guide",
      "note": "University login. Read alongside the current November candidate instructions; current sitting instructions control its format."
    },
    "eqGuide": {
      "label": "Equity module assessment guide",
      "note": "University login. Read alongside the current November candidate instructions; current sitting instructions control its format."
    },
    "elsUpdate": {
      "label": "ELS resitter law update",
      "note": "University login. Read alongside the current November candidate instructions; current sitting instructions control its format."
    },
    "eqUpdate": {
      "label": "Equity resitter law update",
      "note": "University login. Read alongside the current November candidate instructions; current sitting instructions control its format."
    },
    "cwAssessment": {
      "label": "November ELS coursework course",
      "url": "https://elite.law.ac.uk/ultra/courses/_69935285_1/outline",
      "note": "Your Assessment → Coursework → Coursework - Assessment Submission - LWC-ECN-NOV26_CW2. Standard deadline displayed in ELITE: 2 November 17:30 (UTC+8). This course link does not itself submit a file."
    },
    "cwBooklet": {
      "label": "Actual ELS Coursework - Answer Booklet",
      "url": "https://elite.law.ac.uk/ultra/courses/_69935285_1/file/_21178546_1?courseId=_69935285_1",
      "file": "Coursework - Answer Booklet (Word document)",
      "note": "Verified in the November ELS assessment course on 28 October. Download this actual booklet for coursework; save your answer locally using the required SRN filename."
    },
    "eqWrittenCourse": {
      "label": "November Equity written assessment course",
      "url": "https://elite.law.ac.uk/ultra/courses/_69936009_1/outline",
      "note": "Verified on 28 October: course exists but says “Content is on its way!” Advance documentation and the actual Answer Booklet are not yet visible. Recheck at the official release; follow your applicable standard/adjusted access instructions."
    },
    "eqSbaCourse": {
      "label": "November Equity SBA assessment course",
      "url": "https://elite.law.ac.uk/ultra/courses/_69936008_1/outline",
      "note": "Verified November 2026 SBA resit course. Read Before Your Assessment. Do not start the actual assessment before your applicable standard or adjusted start."
    },
    "elsSbaCourse": {
      "label": "November ELS SBA assessment course",
      "url": "https://elite.law.ac.uk/ultra/courses/_69936007_1/outline",
      "note": "Verified November 2026 ELS SBA resit course. Read Before Your Assessment. Do not start the actual assessment before your applicable standard or adjusted start."
    },
    "conduct": {
      "label": "Skills Academy — Academic Conduct",
      "url": "https://elite.law.ac.uk/ultra/courses/_69927545_1/outline",
      "note": "The coursework course says this is mandatory before your first assessment. Verify whether you already completed it; a link marked Not started does not establish completion inside that separate course."
    },
    "precheck": {
      "label": "ELS Pre-Assessment Essential Checklist",
      "url": "https://elite.law.ac.uk/ultra/courses/_69935285_1/assessment/_21178141_1/overview?courseId=_69935285_1",
      "note": "Preparation checklist under Before Your Assessment, not the real coursework/SBA. Review and complete any required acknowledgments yourself; no completion is verified here."
    },
    "techSupport": {
      "label": "Official technical-issue instructions",
      "url": "https://ulaw365.sharepoint.com/sites/StudentInformationCommunication/SitePages/Preparing%20for%20your%20Assessments.aspx#what-to-do-if-there-is-a-technical-issue-during-an-online-assessment",
      "note": "University login. Read the reporting route before the sitting and follow it promptly if a genuine technical problem occurs."
    }
  },
  "days": [
    {
      "date": "2026-10-28",
      "title": "Clarify the paper; choose your exam times",
      "tasks": [
        {
          "id": "title",
          "kind": "Action needed",
          "title": "Get the coursework title clarified",
          "text": "The latest reply refers you to the candidate instructions for word count. It does not reconcile the registration email promising a new paper with the November rule requiring the original title. Ask Assessment Office to confirm the exact ELS title and any individual word-limit exception before committing to your answer.",
          "resources": [
            "mail",
            "cw",
            "cwAssessment",
            "cwBooklet"
          ],
          "units": [],
          "output": "Written confirmation of the applicable title; keep it with your assessment files."
        },
        {
          "id": "timezone",
          "kind": "Optional deadline",
          "title": "Decide whether to request delayed exam starts",
          "text": "If needed, submit one form selecting each relevant component before 17:00 UK on 28 October (01:00 HKT on 29 October). No coursework adjustment. No time-zone request is verified here.",
          "resources": [
            "timeZoneForm",
            "sba",
            "owe"
          ],
          "units": [],
          "time": "Closes 29 Oct · 01:00 HKT",
          "output": "Save the submitted form/acknowledgment and component choices; use the form’s rules for accommodation."
        },
        {
          "id": "equity-basics",
          "kind": "Suggested study",
          "title": "Equity foundations in two short blocks",
          "text": "50 minutes: trusts, certainty, formalities and constitution. 25 minutes: charitable purposes and public benefit. Retrieve first if already reviewed; read the assigned unit material only for the gaps.",
          "resources": [
            "eqCourse",
            "lpa",
            "mcphail",
            "publicBenefit"
          ],
          "units": [
            "eq-1",
            "eq-2",
            "eq-3"
          ],
          "output": "One page: trust-creation checklist plus your three weakest distinctions."
        }
      ]
    },
    {
      "date": "2026-10-29",
      "title": "Build the coursework argument; cover implied trusts",
      "tasks": [
        {
          "id": "conduct-check",
          "kind": "Required preparation",
          "title": "Verify academic-conduct preparation and review the checklist",
          "text": "The November coursework course requires the Skills Academy academic-conduct course before your first assessment. Verify whether you already completed it and finish it if needed. Review the Pre-Assessment Essential Checklist and any instructions in each component’s Before Your Assessment area. Completion is not verified here.",
          "resources": [
            "conduct",
            "precheck",
            "cwAssessment"
          ],
          "units": [],
          "output": "Your own completion record, plus a reviewed preparation checklist."
        },
        {
          "id": "cw-outline",
          "kind": "Suggested study",
          "title": "Plan and begin the confirmed coursework",
          "text": "Only after the title is confirmed: use two 50-minute blocks for your independent argument, primary authorities and a clear outline. If still unresolved, follow up rather than assume which paper applies. The general published rule is 2,500 words for titles set from September 2023, with a 10% tolerance buffer.",
          "resources": [
            "cw",
            "cwBooklet",
            "criteria"
          ],
          "units": [],
          "output": "Your own outline and authority table; no assessed text generated here."
        },
        {
          "id": "equity-implied",
          "kind": "Suggested study",
          "title": "Implied trusts and estoppel",
          "text": "One 50-minute block: compare resulting trusts, common-intention constructive trusts and proprietary estoppel; practise choosing the route from the facts.",
          "resources": [
            "eqCourse",
            "jones",
            "guest"
          ],
          "units": [
            "eq-4"
          ],
          "output": "A route comparison and one independently answered short scenario."
        },
        {
          "id": "access-check",
          "kind": "Required preparation",
          "title": "Check your registered courses and timing links",
          "text": "Find all four components and verify access to the correct November standard or adjusted course. Record your own applicable starts in your calendar; do not assume an adjustment from resit registration alone.",
          "resources": [
            "cwAssessment",
            "eqWrittenCourse",
            "eqSbaCourse",
            "elsSbaCourse",
            "mail"
          ],
          "units": []
        }
      ]
    },
    {
      "date": "2026-10-30",
      "title": "Complete a draft; compare duties",
      "tasks": [
        {
          "id": "cw-draft",
          "kind": "Suggested study",
          "title": "Finish your independent coursework draft",
          "text": "Two 50-minute blocks on the confirmed title. Check each legal proposition against a source; keep a separate list of gaps to repair.",
          "resources": [
            "cw",
            "cwBooklet",
            "criteria",
            "elsCourse"
          ],
          "units": [],
          "output": "A complete draft with citations and a short repair list."
        },
        {
          "id": "duties",
          "kind": "Suggested study",
          "title": "Trustee powers and fiduciary loyalty",
          "text": "One 50-minute block comparing investment duties, care, advice, conflicts and unauthorised profits. Use short facts to distinguish compensation from an account of profits.",
          "resources": [
            "eqCourse",
            "ta2000",
            "fhr"
          ],
          "units": [
            "eq-5",
            "eq-6"
          ],
          "output": "A powers/duties checklist and two explained distinctions."
        }
      ]
    },
    {
      "date": "2026-10-31",
      "title": "Edit the coursework; cover remedies",
      "tasks": [
        {
          "id": "cw-edit",
          "kind": "Suggested study",
          "title": "Edit for analysis and accurate references",
          "text": "Two 50-minute blocks: test the answer against the question and Level 7 criteria, remove unsupported assertions, check citations and the applicable word count.",
          "resources": [
            "cw",
            "cwBooklet",
            "criteria"
          ],
          "units": [],
          "output": "A revised Word draft, bibliography and final-check list."
        },
        {
          "id": "remedies",
          "kind": "Suggested study",
          "title": "Remedies and third-party claims",
          "text": "One 50-minute block: separate compensation, profit stripping, proprietary claims, tracing, knowing receipt and dishonest assistance.",
          "resources": [
            "eqCourse",
            "aib",
            "foskett",
            "byers",
            "ivey"
          ],
          "units": [
            "eq-7",
            "eq-8"
          ],
          "output": "A defendant-by-defendant remedies map."
        }
      ]
    },
    {
      "date": "2026-11-01",
      "title": "Submit early if ready",
      "tasks": [
        {
          "id": "early-submit",
          "kind": "Suggested target",
          "title": "Aim to submit ELS coursework today",
          "text": "Finish independent checks, use the actual assessment Answer Booklet and correct Turnitin box, and save the receipt. Filename: [SRN]_ECN_Assessment; use your Student Reference Number, not your candidate number. This early target does not change tomorrow’s official deadline.",
          "resources": [
            "cwAssessment",
            "cwBooklet",
            "cw",
            "criteria"
          ],
          "units": [],
          "output": "Saved submitted file and Turnitin receipt; a tick here alone does not prove submission."
        },
        {
          "id": "eq-light",
          "kind": "Suggested study",
          "title": "Light Equity recall",
          "text": "25–40 minutes: retrieve the trust-creation checklist, duties and remedies from memory. Repair only the weakest two areas.",
          "resources": [
            "recall",
            "eqCourse"
          ],
          "units": [
            "eq-2",
            "eq-5",
            "eq-8"
          ]
        }
      ]
    },
    {
      "date": "2026-11-02",
      "title": "ELS coursework deadline",
      "tasks": [
        {
          "id": "cw-due",
          "kind": "Official deadline",
          "title": "Submit before 17:30 HKT",
          "text": "Final official deadline: 09:30 UK / 17:30 HKT. Coursework is submitted through Turnitin, not email. No time-zone adjustment applies. Check the correct box and receipt; avoid replacing an on-time file with a late version.",
          "resources": [
            "cwAssessment",
            "cwBooklet",
            "cw",
            "techSupport"
          ],
          "units": [],
          "time": "Before 17:30 HKT",
          "output": "Open and retain the submission receipt and final Word file."
        },
        {
          "id": "eq-repair",
          "kind": "Suggested study",
          "title": "One Equity repair block",
          "text": "After submission, spend up to 50 minutes on your weakest unit and 20 minutes on Consolidate SBA questions; explain why each wrong option is wrong.",
          "resources": [
            "eqCourse",
            "eqUpdate",
            "practice"
          ],
          "units": []
        }
      ]
    },
    {
      "date": "2026-11-03",
      "title": "Rehearse the written exam",
      "tasks": [
        {
          "id": "written-mock",
          "kind": "Suggested study",
          "title": "A realistic Equity specimen attempt",
          "text": "If you can protect the time, use the course specimen for 2 hours plus 15 minutes administration. Otherwise practise one section for 60 minutes and schedule the rest. Compare with Points to Note only after answering. November written format: compulsory Part A (60%) plus one of two Part B questions (40%); 3,500 words overall with a 10% tolerance buffer.",
          "resources": [
            "eqCourse",
            "owe",
            "mock",
            "writing"
          ],
          "units": [],
          "output": "An error log and a timed Word file; the practice booklet is not the real assessment booklet."
        },
        {
          "id": "sba-errors",
          "kind": "Suggested study",
          "title": "Repair your SBA errors",
          "text": "20 minutes: revisit previous mistakes and retrieve the governing rule before looking at the answer.",
          "resources": [
            "eqCourse",
            "recall"
          ],
          "units": []
        }
      ]
    },
    {
      "date": "2026-11-04",
      "title": "Repair gaps and check the setup",
      "tasks": [
        {
          "id": "technical",
          "kind": "Required preparation",
          "title": "Rehearse saving and uploading a local Word file",
          "text": "Use Chrome or Firefox, a local Microsoft Word file and the Assessment Practice Area available through ELITE. Check the actual Answer Booklet, SRN, internet and backup connection. November is open book and unproctored; no Respondus is required for these sittings.",
          "resources": [
            "cwAssessment",
            "eqWrittenCourse",
            "eqSbaCourse",
            "elsSbaCourse",
            "mock",
            "owe",
            "techSupport"
          ],
          "units": [],
          "output": "Working local Word save, upload rehearsal and a short authority index."
        },
        {
          "id": "repair",
          "kind": "Suggested study",
          "title": "Correct the two biggest mock weaknesses",
          "text": "Two 40-minute blocks: redo missed issues from fresh facts, then check primary sources and the resitter update. Stop adding long notes; keep your index searchable.",
          "resources": [
            "eqCourse",
            "eqUpdate",
            "practice",
            "recall"
          ],
          "units": []
        }
      ]
    },
    {
      "date": "2026-11-05",
      "title": "Download and prepare the Equity advance material",
      "tasks": [
        {
          "id": "advance",
          "kind": "Official release",
          "title": "Get the Equity advance documentation",
          "text": "Standard release: 09:30 UK on the working day before the written exam = 17:30 HKT today. Open the Equity written assessment course and download the advance documentation. The exact assessment-specific filename/link must be taken from the released course; it is not available on this public page. If using an adjusted sitting, follow your own access instructions.",
          "resources": [
            "eqWrittenCourse",
            "owe"
          ],
          "units": [],
          "time": "17:30 HKT · standard release",
          "output": "Save the advance document locally and read it carefully."
        },
        {
          "id": "advance-study",
          "kind": "Suggested study",
          "title": "Organise Part A issues and authorities",
          "text": "Use two 40-minute blocks to read, research and organise the advance facts against the relevant Equity units. Review the current instructions and prepare your own concise index; keep assessed answers independent. Rest before tomorrow.",
          "resources": [
            "eqCourse",
            "eqGuide",
            "eqUpdate",
            "notes"
          ],
          "units": [],
          "output": "Your own factual chronology, issue checklist and authority index."
        }
      ]
    },
    {
      "date": "2026-11-06",
      "title": "Equity exam day — standard sitting",
      "tasks": [
        {
          "id": "eq-sba",
          "kind": "Official assessment",
          "title": "Equity SBA",
          "text": "Start 17:30 HKT (09:30 UK). 20 questions, 45 minutes; a prompt start normally finishes 18:15. First 15 minutes are a launch allowance, with hard close 18:30. Open book and unproctored. Use this date only if the standard sitting applies to you.",
          "resources": [
            "eqSbaCourse",
            "sba",
            "eqUpdate",
            "techSupport"
          ],
          "units": [],
          "time": "17:30–18:15 HKT · hard close 18:30"
        },
        {
          "id": "eq-written",
          "kind": "Official assessment",
          "title": "Equity written examination",
          "text": "Start 21:30 HKT (13:30 UK). Two hours answering; stop writing 23:30 and submit before 23:45 using the actual Word Answer Booklet, filename [SRN]_ETS_Assessment. The final 15 minutes are administration only. Use your own valid adjusted schedule instead if applicable.",
          "resources": [
            "eqWrittenCourse",
            "owe",
            "techSupport"
          ],
          "units": [],
          "time": "21:30 start · write until 23:30 · submit before 23:45",
          "output": "Keep the submitted Word file and Turnitin receipt."
        }
      ]
    },
    {
      "date": "2026-11-07",
      "title": "Recover, then switch to ELS",
      "tasks": [
        {
          "id": "eq-adjusted",
          "kind": "Conditional assessment",
          "title": "Only if using delayed Equity starts",
          "text": "For a valid +8 choice: SBA 01:30, written 05:30. For +16: SBA 09:30, written 13:30. These are HKT on 7 November. They delay the UK sitting; they are not merely the normal HKT conversion. Each component may have its own choice. Use your request record and correct ELITE link.",
          "resources": [
            "mail",
            "eqSbaCourse",
            "eqWrittenCourse",
            "sba",
            "owe"
          ],
          "units": [],
          "output": "Follow your applicable paper’s duration and submission rules; skip these alternate starts if you used the standard sitting."
        },
        {
          "id": "els-core",
          "kind": "Suggested study",
          "title": "ELS Units 1–6 with mixed SBA practice",
          "text": "Once Equity is finished and you have rested, use two 45-minute blocks on sources, interpretation, precedent, constitutional principles, sovereignty, privilege and devolution. Retrieve first; spend more time on wrong answers than on rereading.",
          "resources": [
            "elsCourse",
            "miller",
            "sovereigntyDetail",
            "recall"
          ],
          "units": [
            "els-1",
            "els-2",
            "els-3",
            "els-4",
            "els-5",
            "els-6"
          ],
          "output": "A short error log plus a one-page constitutional route map."
        }
      ]
    },
    {
      "date": "2026-11-08",
      "title": "ELS updates and a timed SBA set",
      "tasks": [
        {
          "id": "els-update",
          "kind": "Required preparation",
          "title": "Read the ELS resitter update and directed chapter",
          "text": "Check the examinable law date and the assigned textbook material, including the update’s chapter 9 direction. Keep retained/assimilated law and commencement distinct.",
          "resources": [
            "elsUpdate",
            "elsCourse",
            "euwa",
            "reul"
          ],
          "units": [
            "els-7",
            "els-8",
            "els-9"
          ]
        },
        {
          "id": "els-mock",
          "kind": "Suggested study",
          "title": "A course-based 20-question set in 45 minutes",
          "text": "Use official Consolidate/specimen SBA questions where available; the site’s six-question warm-up is only an extra exercise. Review every mistake and stop heavy revision early.",
          "resources": [
            "elsCourse",
            "sba",
            "practice"
          ],
          "units": [],
          "output": "One timed set and a final list of five distinctions to retrieve."
        }
      ]
    },
    {
      "date": "2026-11-09",
      "title": "ELS SBA — standard sitting",
      "tasks": [
        {
          "id": "els-sba",
          "kind": "Official assessment",
          "title": "English Legal System SBA",
          "text": "Start 17:30 HKT (09:30 UK). 20 questions, 45 minutes; normally finish 18:15, hard close 18:30. Use the correct SBA course and standard sitting only if it applies. First 15 minutes are a launch allowance, not extra answering time.",
          "resources": [
            "elsSbaCourse",
            "sba",
            "elsUpdate",
            "techSupport"
          ],
          "units": [],
          "time": "17:30–18:15 HKT · hard close 18:30",
          "output": "Check the assessment shows submitted/completed in ELITE."
        }
      ]
    },
    {
      "date": "2026-11-10",
      "title": "Adjusted ELS sitting or post-exam checks",
      "tasks": [
        {
          "id": "els-adjusted",
          "kind": "Conditional assessment",
          "title": "Only if using a delayed ELS start",
          "text": "A valid +8 choice starts at 01:30 HKT today; +16 starts at 09:30 HKT today. Use your own component choice and adjusted ELITE course. Skip these alternate starts if you completed the standard sitting yesterday.",
          "resources": [
            "mail",
            "elsSbaCourse",
            "sba"
          ],
          "units": []
        },
        {
          "id": "archive",
          "kind": "Required preparation",
          "title": "Check all four components and save evidence",
          "text": "Check the two SBA completion states and both Turnitin receipts. Save files and receipts privately. Report any genuine access/submission problem promptly through the official support route; a browser checklist is not evidence of university submission.",
          "resources": [
            "cwAssessment",
            "eqWrittenCourse",
            "eqSbaCourse",
            "elsSbaCourse",
            "mail",
            "techSupport"
          ],
          "units": [],
          "output": "A private folder containing the actual submitted files, receipts and relevant confirmations."
        }
      ]
    },
    {
      "date": "2026-12-07",
      "title": "Provisional results",
      "tasks": [
        {
          "id": "provisional",
          "kind": "Official milestone",
          "title": "Check the provisional results release",
          "text": "Scheduled release: 13:30 UK / 21:30 HKT. Read the result guidance and any individual conditions. These are provisional results, not a final award or proof of eligibility for June graduation.",
          "resources": [
            "mail",
            "courses",
            "owe"
          ],
          "units": [],
          "time": "21:30 HKT",
          "output": "Save the results privately and identify any outstanding component or required next action."
        }
      ]
    },
    {
      "date": "2027-01-19",
      "title": "Final results",
      "tasks": [
        {
          "id": "final-results",
          "kind": "Official milestone",
          "title": "Check the final results publication",
          "text": "Scheduled release: 14:00 UK / 22:00 HKT. Verify the official record and any remaining modules, attempt limits and completion deadline with the university before planning further resits. Passing these two subjects alone does not complete all outstanding modules.",
          "resources": [
            "mail",
            "courses",
            "owe"
          ],
          "units": [],
          "time": "22:00 HKT",
          "output": "Your official updated record and a verified plan for any remaining modules."
        }
      ]
    }
  ]
};
for (const [key,subject,field] of [["elsGuide","els","guide"],["eqGuide","equity","guide"],["elsUpdate","els","update"],["eqUpdate","equity","update"]]) study.timeline.resources[key].url=study.subjects[subject][field];
