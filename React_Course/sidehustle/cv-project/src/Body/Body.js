import React from 'react';


const Body = () => {
    const texts = {
        summary: "I am a product designer and  software developer,a fitness enthusiast and a digital artist. I am very disciplined and devoted to my craft and I strive to make  valuable improvements every week(Yes, the next time you read this, I would already be much better than I am now).I owe my growth and achievements to many days, months and years of hardwork and support from family and friends. I value team work and collaborative efforts  with diversity. I can serve in a leading role and or provide support to my team mates to maximise efficiency and meet deadlines.",
        skillHighlights: ['Project management', 'Strong decision maker', 'Complete problem solver', 'Creative design', 'Innovative', 'Service-focused'],
        experience: {
            webDeveloper: '09/2015 to 05/2019',
            lunaWebDesign: 'New york',
        },
        education: {
            bsc: 'Computer Information Systems - 2014',
            location: 'Columbia University, NY'
        },
        languages: ['Spanish -C2', 'Chinese -A1'],
        certifications: {
            phpCertificate: 'Zend, CodeIgniter, Symfony',
            programmingLangs: 'Javascript, HTML5, PHP, OOP, CSS, SQL, MySQL'
        }
    }
    return (
        <div className='Body'>
            <BodyItem heading="Summary" content={texts.summary} />
            <BodyItem heading="Skill Highlights" content={
                <div>
                    <li>{texts.skillHighlights[0]}</li>
                    <li>{texts.skillHighlights[1]}</li>
                    <li>{texts.skillHighlights[2]}</li>
                    <li>{texts.skillHighlights[3]}</li>
                    <li>{texts.skillHighlights[4]}</li>
                    <li>{texts.skillHighlights[5]}</li>
                </div>
            } />
            <BodyItem heading="Experience" title='Web Developer ' content={texts.experience.webDeveloper} />
            <BodyItem heading="Education" title='Bachelor of Science' content={texts.education.bsc} />
            <BodyItem heading="Labguages" content={texts.languages[0]} />
            <BodyItem heading="Certifications" content={texts.certifications.programmingLangs} />   
        </div>
    );
}

const BodyItem = (props) => {
    return (
        <div className="Body-item">
            <p className="Body-item-heading">{props.heading}</p>
            <div className='Line-text'>{props.title}{props.content}</div>
        </div>
    );
}

export default Body;