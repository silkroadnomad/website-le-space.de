import LabWeek2023LibP2P01 from "$lib/assets/2023-labweek-libp2p-01.png";
import Vienna2023Svelte from "$lib/assets/2023-vienna-svelte-02.png";
import Thailand2022OrbitDB from "$lib/assets/2022-thailand-orbitdb-04.png";
import CoworkingGoaSunsetMediation01 from "$lib/assets/coworking-goa-sunset-mediation-01.png";
import Mallorca2012Loft38Portixol01 from "$lib/assets/2012-LOFT38-01.png";
import BitcoinCore01 from "$lib/assets/bitcoin-core-01.png";
import KarakorumWorking01 from "$lib/assets/karakorum-working-01.png";
import CoworkingLeipzig01 from "$lib/assets/coworking-leipzig-01.png";
import LeipzigWaldstrasseGrails01 from "$lib/assets/2009-leipzig-waldstrasse-grails-01.png";

import VsaJump07 from "$lib/assets/vsa-jump-07.png";
import {icons} from "./icons.js";

export let timeline_en = [
    { image: LabWeek2023LibP2P01, year: "2023", headline: "Local First Software & Peer-To-Peer Development", industry:"Blockchain / Peer-To-Peer", location: "Istanbul, Republic of Türkiye", projects: 'Attending Labweek23 Conference, LibP2P day, IPFSConnect', technologies: 'P2PLib, IPFS, Helia', icons:[icons.libp2p, icons.helia, icons.ipfs, icons.svelte, icons.typescript]},
    { image: Vienna2023Svelte, year: "2023", headline: "Svelte/SvelteKit Development", industry:"Pharmaceutical Industry",  location: "Vienna, Republic of Austria", projects: 'Svelte web app for a scientific research platform', technologies: 'Svelte/SvelteKit 4.0, JavaScript, Cypress, Playwright, JSDoc',  icons:[icons.javascript, icons.svelte, icons.cypress, icons.coffeescript, icons.intellijidea, icons.storybook]},
    { image: Thailand2022OrbitDB, year: "2022", headline: "OrbitDB, LibP2P, JS-IPFS / Helia",  industry:"Blockchain / Peer-To-Peer Development / IT / Media",  location: "Kingdom of Thailand, Malaysia, Lao People's Democratic Republic", projects: 'Decentralized Peer-to-Peer Blog', technologies: 'ReactJS, JavaScript, Cypress, OrbitDB, libp2p, js-ipfs, NodeJS,',  icons:[icons.ipfs, icons.libp2p, icons.react, icons.javascript, icons.nginx, icons.nodedotjs, icons.metamask, icons.docker, icons.web3dotjs, icons.letsencrypt, icons.openssl]},
    { image: CoworkingGoaSunsetMediation01 , year:"2013-2016", headline: "Remote.Yoga Startup \"Akashionata\"", industry:"Health", location: "Agonda, Goa, Republic Indien", projects:"Video & audio educational platform for yoga students and yoga teacher (mobile & web)", technologies: "MeteorJS, WebRTC, Apache-Cordoba, React-Native, Android, iOS", icons:[icons.webrtc, icons.android, icons.ios, icons.meteor, icons.javascript, icons.apachecordova, icons.intellijidea]},
    { image: Mallorca2012Loft38Portixol01 , year:"2012", headline: "Java Swing & Google WebToolkit Development", industry:"Finance", location: "Palma de Mallorca, Spain", projects:"Porting a Java Swing Application to Google WebToolkit", technologies: "Google Web Toolkit, Java Swing, Android, iOS, Eclipse", icons:[icons.gwt, icons.java, icons.oracle, icons.android, icons.ios, icons.eclipseide]},
    { image: BitcoinCore01, year: "2011", headline: "The Bitcoin Principles", industry:"Crypto Currencies, Blockchain", location: "Rishikesh, Uttarakhand, Republic of India", projects: 'The Bitcoin Principles', technologies: 'The Bitcoin Principles, Bitcoin Core',icons:[icons.bitcoin]},
    { image: KarakorumWorking01, year: "2011", headline: "Travelling The Silk Road", industry:"Sabbatical",  location: "Karakoram Highway China/Islamic Republic of Pakistan", projects: 'Studies of world history, Gaining Cultural Competence', technologies: 'humility & openness' ,icons: [icons.nusrat]},
    { image: CoworkingLeipzig01, year: "2009", headline: "Launching Le Space (beta) Coworking zu Leipzig", industry:"office rental / marketing / networking / education", location: "Leipzig, Germany", projects: 'Launching a Coworking Space, Co-Organizing Coworking Week Germany (2010), Joining 1st Coworking Europe Conference (2010)', technologies: 'Coworking, Bar Camps, Events', icons:[icons.mdr, icons.mdrinfo, icons.kreuzer, icons.lvz, icons.dnn]},
    { image: LeipzigWaldstrasseGrails01, year: "2009", headline: "Groovy & Grails Development",  industry:"IT", location:"Waldstraße Leipzig, Germany",  projects: "Implementing an open source technician report web app", technologies: "Groovy & Grails, Selenium, Eclipse", icons:[icons.grails, icons.apachegroovy, icons.mysql, icons.selenium]},
    { image: VsaJump07, year: "2006", headline: "Java/J2EE & Java Swing Development", industry:"health / medical", location: "Munich/Gefrees, Germany", projects: 'Jump CRM/ERP for Pharmacies', technologies: 'Java/J2EE, Java Swing, SQL, Oracle DB',  icons:[icons.java, icons.oracle, icons.eclipseide]},
];

export const timeline_de = [
    { image: LabWeek2023LibP2P01, year: "2023", headline: "Local First Software & Peer-To-Peer-Entwicklung", industry:"Blockchain / Peer-To-Peer", location: "Istanbul, Republik Türkei", projects: 'Labweek23-Konferenz, LibP2P-Tag, IPFSConnect u.v.a', technologies: 'P2PLib, IPFS, Helia', icons:[icons.libp2p, icons.helia, icons.ipfs, icons.svelte, icons.typescript]},
    { image: Vienna2023Svelte, year: "2023", headline: "Svelte/SvelteKit-Entwicklung", industry:"Pharmaindustrie",  location: "Wien, Republik Österreich", projects: 'Svelte Web-App für eine wissenschaftliche Plattform', technologies: 'Svelte/SvelteKit 4.0, JavaScript, Cypress, Playwright, JSDoc',  icons:[icons.javascript, icons.svelte, icons.cypress, icons.coffeescript, icons.intellijidea, icons.storybook]},
    { image: Thailand2022OrbitDB, year: "2022", headline: "OrbitDB, LibP2P, JS-IPFS / Helia",  industry:"Blockchain / Peer-To-Peer-Entwicklung / IT / Medien",  location: "Königreich Thailand, Malaysia, Demokratische Volksrepublik Laos", projects: 'Dezentraler Peer-to-Peer-Blog', technologies: 'ReactJS, JavaScript, Cypress, OrbitDB, libp2p, js-ipfs, NodeJS,',  icons:[icons.ipfs, icons.libp2p, icons.react, icons.javascript, icons.nginx, icons.nodedotjs, icons.metamask, icons.docker, icons.web3dotjs, icons.letsencrypt, icons.openssl]},
    { image: CoworkingGoaSunsetMediation01 , year:"2013-2016", headline: "Remote.Yoga Startup \"Akashionata\"", industry:"Health", location: "Agonda, Goa, Republik Indien", projects:"Video/Audio Bildungsplattform für Yogalehrer und Yogaschüler (Mobile & Web)", technologies: "MeteorJS, WebRTC, Apache-Cordoba, React-Native, Android, iOS", icons:[icons.webrtc, icons.android, icons.ios, icons.meteor, icons.javascript, icons.apachecordova, icons.intellijidea]},
    { image: Mallorca2012Loft38Portixol01 , year:"2012", headline: "Java Swing & Google WebToolkit-Entwicklung", industry:"Finanzindustrie / Fond management", location: "Palma de Mallorca, Spanien", projects:"Portierung einer Java Swing-Anwendung auf Google WebToolkit", technologies: "Google Web Toolkit, Java Swing, Android, iOS, Eclipse", icons:[icons.gwt, icons.java, icons.oracle, icons.android, icons.ios, icons.eclipseide]},
    { image: BitcoinCore01, year: "2011", headline: "Die Bitcoin-Prinzipien / Groovy & Grails-Entwicklung", industry:"Kryptowährungen, Blockchain, IT-Verwaltung", location: "Rishikesh, Uttarakhand, Republik Indien", projects: 'Die Bitcoin-Prinzipien', technologies: 'Die Bitcoin-Prinzipien, Bitcoin Core',icons:[icons.bitcoin, icons.grails, icons.apachegroovy, icons.mysql, icons.selenium]},
    { image: KarakorumWorking01, year: "2011", headline: "Reality-Check Seidenstraße", industry:"Firmen-Sabbatical",  location: "Karakorum Highway, China/Islamische Republik Pakistan", projects: 'Selbststudium Weltgeschichte, Interkulturelle Kompetenz', technologies: 'Offenheit, Toleranz, Orientierungssinn' ,icons: [icons.nusrat]},
    { image: CoworkingLeipzig01, year: "2009", headline: "Eröffnung Le Space (beta) Coworking zu Leipzig", industry:"Vermietung / Marketing / Netzwerk / Bildung", location: "Leipzig, Deutschland", projects: 'Gründung eines Coworking Space, Mitorganisation der Coworking Week Germany (2010), Teilnahme an der 1. Coworking Europe Conference in Brüssel (2010)', technologies: 'Coworking, Bar Camps, Events', icons:[icons.mdr, icons.mdrinfo, icons.kreuzer, icons.lvz, icons.dnn]},
    { image: LeipzigWaldstrasseGrails01, year: "2009", headline: "Groovy & Grails Development", industry:"IT", location:"Waldstraße Leipzig", projects: "Implementierung 'Technikerbericht' (Open Source) ", technologies: "Groovy & Grails, Selenium, Eclipse", icons: [icons.grails, icons.apachegroovy, icons.mysql, icons.selenium]},
    { image: VsaJump07, year: "2006", headline: "Java/J2EE & Java Swing Entwicklung", industry:"Gesundheit / Medizin", location: "München/Gefrees, Deutschland", projects: 'Jump CRM/ERP für Apotheken', technologies: 'Java/J2EE, Java Swing, SQL, Oracle DB',  icons:[icons.java, icons.oracle, icons.eclipseide]},
];