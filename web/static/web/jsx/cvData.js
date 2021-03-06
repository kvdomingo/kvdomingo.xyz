var educationInfo = {
    sectionName: 'Education',
    icon: 'fas fa-graduation-cap',
    elements: [
        {
            key: 'upd',
            title: 'University of the Philippines',
            startDate: 'Aug 2015',
            endDate: 'Jun 2020 (exp.)',
            connection: [
                { name: 'National Institute of Physics', href: 'http://nip.upd.edu.ph' },
            ],
            description: [ 'B.S. Applied Physics (Major in Instrumentation)' ],
        },
    ]
};

var trainingInfo = {
    sectionName: 'Training',
    icon: 'fas fa-certificate',
    elements: [
        {
            key: 'cs50',
            title: 'Harvard University',
            startDate: 'Dec 2019',
            endDate: 'Apr 2020',
            connection: [
                { name: 'Division of Continuing Education', href: 'https://www.dce.harvard.edu/' },
            ],
            description: [
                'CS50W: Web Programming with Python and JavaScript',
                'CS50M: Mobile App Development with React Native',
            ],
        }
    ]
};

var workInfo = {
    sectionName: 'Work Experience',
    icon: 'fas fa-briefcase',
    elements: [
        {
            key: 'detectph',
            title: 'Backend/Web Developer',
            startDate: 'Mar 2020',
            endDate: 'present',
            connection: [
                { name: 'DetectPH', href: 'https://detectph.com/' },
            ],
            description: ['Volunteer developer for a COVID-19 contact tracing app in the Philippines.'],
        },
        {
            key: 'upiris-ec',
            title: 'Executive Officer for Promotions and Documentation',
            startDate: 'Jan 2020',
            endDate: 'present',
            connection: [
                { name: 'UP Iris', href: 'https://facebook.com/upiris' },
            ],
            description: ['Oversaw all organization matters regarding publicity and documentation of both internal and external events.'],
        },
        {
            key: 'upiris',
            title: 'Photographer',
            startDate: 'May 2019',
            endDate: 'present',
            connection: [
                { name: 'UP Iris', href: 'https://facebook.com/upiris' },
            ],
            description: [],
        },
        {
            key: 'ipl',
            title: 'Student Researcher',
            startDate: 'Oct 2017',
            endDate: 'present',
            connection: [
                { name: 'Instrumentation Physics Laboratory', href: 'https://sites.google.com/site/instrumentationphysicslab/' },
            ],
            description: ['Processing and analysis of videos, images, and other signals using classical signal processing methods, compressive sensing, and machine learning.'],
        },
        {
            key: 'pgc',
            title: 'Intern',
            startDate: 'Jan 2020',
            endDate: 'Feb 2020',
            connection: [
                { name: 'Philippine Genome Center', href: 'https://pgc.up.edu.ph/' },
            ],
            description: ['Underwent training in bioinformatics; developed a command-line tool and web application for designing primers for site-directed mutagenesis.'],
            related: '/dev/primerdriver',
        },
        {
            key: 'trin',
            title: 'Intern',
            startDate: 'Jun 2019',
            endDate: 'Nov 2019',
            connection: [
                { name: 'The Rest is Noise PH', href: 'https://therestisnoiseph.com/' },
            ],
            description: ['Provided analytics to determine key points to target in order to maximize marketing; involved in project planning and on-site production for All of The Noise 2019 held at Century City Mall, City of Makati.'],
        },
        {
            key: 'philcomars',
            title: 'Student Assistant',
            startDate: 'Dec 2018',
            endDate: 'Jan 2019',
            connection: [
                { name: 'Philippine Coral Reef and Mangrove Remote Sensing Project', href: 'https://202.90.159.82/philcomars/' }
            ],
            description: ['Performed ground-truth validation of images involving corals classified by a deep neural network.'],
        },
        {
            key: 'uprotc',
            title: 'Corps Non-Commissioned Officer for Documentation',
            startDate: 'Aug 2018',
            endDate: 'May 2019',
            connection: [
                { name: "University of the Philippines Reserve Officers' Training Corps", href: 'https://www.uprotc.org/' }
            ],
            description: ['Official photographer of the UPD ROTC Corps of Cadets for the C.Y. 2018-2019.'],
            related: '/photography/clients/uprotc',
        },
    ]
};

var projectInfo = {
    sectionName: 'Projects',
    icon: 'fas fa-project-diagram',
    elements: [
        {
            key: 'proj-detectph',
            title: 'DetectPH',
            startDate: 'Mar 2020',
            endDate: 'present',
            connection: [
                { name: 'Project Website', href: 'https://detectph.com/' },
            ],
            description: ['Volunteered as one of the designers of an Android/iOS app to perform contact tracing of COVID-19 cases in the Philippines, spearheaded by the UP Diliman College of Science.'],
        },
        {
            key: 'ncovenience',
            title: 'NCOVENIENCE: COVID-19 PH Tracker Dashboard',
            startDate: 'Mar 2020',
            endDate: 'present',
            connection: [
                { name: 'Project Website', href: 'https://ncovenience.herokuapp.com/' },
            ],
            description: ['Designed an information hub, dashboard, and API regarding COVID-19 data in the Philippines.'],
        },
        {
            key: 'primerdriver',
            title: 'PrimerDriver',
            startDate: 'Jan 2020',
            endDate: 'Feb 2020',
            connection: [
                { name: 'Project Website', href: 'https://primerdriver.herokuapp.com/' },
                { name: 'Download CLI', href: 'https://github.com/kvdomingo/primerdriver/releases' },
            ],
            description: ['A command-line tool and web application to design PCR primers for site-directed mutagenesis.'],
        },
    ]
};

var publicationInfo = {
    sectionName: 'Publications',
    icon: 'fas fa-newspaper',
    elements: [
        {
            key: 'spp2019',
            title: 'Frequency domain reconstruction of stochastically sampled signals based on compressive sensing',
            startDate: '',
            endDate: 'May 2019',
            connection: [{
                name:
                <React.Fragment>
                    <i>Proceedings of the Samahang Pisika ng Pilipinas</i> <b>37</b>, SPP-2019-PB-38
                </React.Fragment>,
                href: 'https://paperview.spp-online.org/proceedings/article/view/SPP-2019-PB-38'
            }],
            description: [
                <React.Fragment>
                    <p>K. V. Domingo, and M. N. Soriano</p>
                    <p className='lead'><b>Abstract:</b></p>
                    The field of compressed sensing (CS) has recently been gaining traction as a viable workaround to the Nyquist-Shannon sampling theorem (NSST). This allows highly accurate signal recovery from incomplete frequency information. In this paper, we investigate the ability of compressive sampling to recover the higher harmonics of a recorded guitar signal. Sampling is done in the temporal domain, and the reconstruction is performed in the frequency domain. It is shown that even when taking a small number of random samples corresponding to some underlying sub-Nyquist rate, the base frequency, including up to fifth-order harmonics, can be recovered. The performance of three algorithms, namely least absolute shrinkage and selection operator (LASSO), orthogonal matching pursuit (OMP), and smoothed L0 norm (SL0) algorithm in terms of computation time and reconstruction error (cosine similarity) were investigated.
                </React.Fragment>
            ],
        }
    ]
};
