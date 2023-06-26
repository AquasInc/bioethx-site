import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import aiImage from '../public/ai.webp';

export default function IME2023() {
  return (
    <Layout title="IME 2023">
      <div className={styles.container}>
        <div className={styles.ime2023}>
          <h1 className={styles.mainHeading}>
            Artificial Intelligence is an Undeniable Reality
          </h1>
          <h2 className={styles.mainHeading}>For Bioethics Committees</h2>
          <div style={{position: 'relative', width: '100%', height: '70vh'}}>
            <Image src={aiImage} fill={true} priority={true} placeholder={'blur'} />
          </div>
          <ul>
            <li><Link href={'#abstract'}>Abstract</Link></li>
            <li><Link href={'#poster'}>Poster</Link></li>
            <li><Link href={'https://www.youtube.com/watch?v=XBTt-V6wX88'} target='_blank'>Video</Link></li>
          </ul>
          <hr id="abstract" />
          <p>
            <b>Abstract</b>
            <br />
            <br />
            Bioethics  committees  strive  for  consistency  of  clinical  ethics  investigations.   This  objective 
            benefits form established standard processes and  comprehensive digitized documentation of 
            consults. To support bioethics committee work, AQUAS, Inc. developed a consult management 
            tool (see BioEthx.org) that uses workflow touchpoints, reminders, collaboration tools to invite 
            expert opinions  in  the  analysis.   Adopting  a  well-defined  codification  scheme can  provide a 
            shorthand way  to  describe a  consult,  its  focus,  patient  profile,  and  healthcare setting.   The 
            BioEthx tool uses the consult coding scheme created by Kelly Armstrong currently at INOVA, 
            with  her  permission. Her coding  scheme is  comprehensive, and  the  tool  is  set-up  to  adopt 
            alternative  schemes.  Codified  consults  are  aggregated  and  analyzed  along  with 
            outcomes.  Bioethx is a cloud-based software application that was created to receive consult 
            information, analyze, conclude, and  conduct follow up reviews that is used from the inception 
            of a consult to the very end of documenting outcomes.    
            <br />
            <br />
            Bioethics committees in Latin America and in the United States have used this and similar tools  
            recognizing its relevance in ensuring the protection and wellbeing of patients.  The information 
            collected using the tool can be aggregated and reported to learn how to better manage future 
            consults.  The tool is effective in collecting consult information, screens that gather information 
            during  the  different  phases  of  a  consult,  from  entering  the  original  request,  approach, 
            communications, and final disposition.  The resulting information can be used to conduct peer 
            reviews and can be used as a training tool and identification of lessons learned.     
            <br />
            <br />
            The use of this tool facilitates bioethics committee oversight activities in clinical situations;  use 
            of  the  tool  reduces  human  errors  and  enables  improved communication among  committee 
            members, and between patient representatives and healthcare providers. The tool facilitates 
            digital access to legal document (informed consent, legal representation, advanced directives, 
            for example).  Capturing and codifying consult information in a digital repository and creating a 
            shared  repository  of  aggregated,  sanitized  information  is  one of  the  sources that,  together 
            with   Artificial  Intelligence  and  Machine  Learning,  provides  the  bioethicist  an  evolving 
            knowledge base of best practices.  The future will include Artificial Intelligence, not to replace 
            the bioethicist, but rather to help  research and formulate better human decision making in 
            patient care.     
            <br />
            <br />
            Evangelina Mollar  
            <br />
            Bioethics Committee Member in Argentina  
            <br />
            Lawyer, Master in Medical Ethics.  
            <br />
            Bioethics Consultant  
            <br />
            Regional Representative in BioEthx Group, AQUAS, Inc. (bioethx.org)
          </p>
          <div id="poster">
            <Image className={styles.poster} src='/poster.jpg' width={1080} height={1366} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
