import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BsYelp } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";




export const Linx = [
    {
        link: "About",
        url: "/#about"
    },
    {
        link: "Services",
        url: "/#services"
    },
    {
        link: "Contact",
        url: "/#contact"
    }
]

export const exLinx = [
    {
        name: "instagram",
        url: "https://www.instagram.com/td_solar_and_electric?igsh=NWNibDJ3d29wc2s4",
        icon: <SiInstagram />

    },
    {
        name: "yelp",
        url: "https://yelp.com/",
        icon: <BsYelp />

    }
]

export const services = [
    {
        name: "Residential Solar Installation",
        brief: "Solar Installation",
        compact: "Solar Install",
        desc: "Clean, reliable residential solar systems",
        img: "/TD_solar_icon_residential_solar.png",
        img_alt: "Sun / SolarPanel",
        details: {
            service: "Residential Solar Installation",
            slug: "residential-solar-installation",
            hero: {
                title: "Residential Solar Installation",
                subtitle: "Clean, reliable solar power for your home"
            },
            intro: "At TD Solar & Electric, we help homeowners take control of their energy with professionally installed residential solar systems. Our solar installations are designed to reduce energy costs, increase home value, and provide long-term, dependable power—all while meeting current safety and electrical codes.",
            overview: "Going solar is a smart investment, but only when it’s installed correctly. We handle the entire residential solar installation process, from system planning to final connection, ensuring your solar system is safe, efficient, and built to perform for years to come.",
            services_included: [
                "Custom residential solar system design",
                "Roof-mounted solar panel installation",
                "Electrical integration and system wiring",
                "Inverter installation and configuration",
                "System testing and safety verification",
                "Coordination with inspections and utility requirements"
            ],
            why: "A properly installed solar system doesn’t just lower your electric bill—it protects your home, improves efficiency, and ensures long-term reliability. Poor installation can lead to performance issues, safety risks, and costly repairs. Our experience in both solar and electrical work ensures your system is installed the right way from the start.",
            who: [
                "Homeowners looking to reduce monthly energy costs",
                "Homes preparing for battery backup or EV chargers",
                "Properties upgrading aging electrical systems",
                "Families seeking energy independence and reliability"
            ],
            cta: {
                "headline": "Ready to Go Solar?",
                "text": "Schedule a consultation with TD Solar & Electric to see if residential solar is right for your home.",
                "button_text": "Request a Solar Consultation",
                "link": "/contact"
            }
        }
    },
    {
        name: "Solar Maintenance & Repair",
        brief: "Maintenance & Repair",
        compact: "Solar Repair",
        desc: "Maintenance and performance troubleshooting",
        img: "/TD_solar_icon_solar_repair.png",
        img_alt: "Maintenance & Repair",
        details: {
            service: "Solar Maintenance & Repair",
            slug: "solar-maintenance-repair",
            hero: {
                title: "Solar Maintenance & Repair",
                subtitle: "Keep your solar system performing at its best"
            },
            intro: "If your solar system isn’t producing the power it should, TD Solar & Electric provides professional solar maintenance and repair services to restore performance and reliability. We help homeowners identify issues early, protect their investment, and keep systems running efficiently.",
            overview: "Solar systems are built to last, but like any electrical system, they require occasional maintenance and expert troubleshooting. Whether you’re experiencing reduced output, system errors, or unexpected shutdowns, we diagnose the issue and provide clear, effective solutions.",
            services_included: [
                "Solar system performance diagnostics",
                "Troubleshooting inverter and system faults",
                "Electrical connection inspections",
                "System repairs and component replacement",
                "Maintenance checks for existing solar installations",
                "Safety and performance verification"
            ],
            why: "Even small issues can significantly reduce solar output over time. Regular maintenance and timely repairs help maximize energy production, extend system lifespan, and prevent costly damage. Our background in both solar and electrical work allows us to identify problems quickly and fix them correctly.",
            who: [
                "Homeowners noticing reduced solar energy production",
                "Homes receiving solar system error alerts",
                "Property owners with aging solar installations",
                "Families looking to protect their solar investment"
            ],
            cta: {
                headline: "Is Your Solar System Underperforming?",
                text: "Let TD Solar & Electric inspect your system and restore it to peak performance.",
                button_text: "Schedule Solar Service",
                link: "/contact"
            }
        }
    },
    {
        name: "Main Electrical Panel Upgrades",
        brief: "Panel Upgrades",
        compact: "Panel Upgrades",
        desc: "Safe upgrades for modern power needs",
        img: "/TD_solar_icon_panel.png",
        img_alt: "CircuitBoard",
        details: {
            service: "Main Electrical Panel Upgrades",
            slug: "main-electrical-panel-upgrades",
            hero: {
                title: "Main Electrical Panel Upgrades",
                subtitle: "Modern electrical capacity for today’s homes"
            },
            intro: "An outdated or overloaded electrical panel can limit your home’s power and create serious safety risks. TD Solar & Electric provides professional main electrical panel upgrades to ensure your home can safely support modern energy demands.",
            overview: "As homes add solar systems, EV chargers, appliances, and backup power, older electrical panels often struggle to keep up. We replace aging panels with modern, code-compliant systems designed to handle increased loads safely and reliably.",
            services_included: [
                "Replacement of outdated or undersized electrical panels",
                "Upgrades to support solar, EV chargers, and battery systems",
                "Circuit reconfiguration and load balancing",
                "Breaker replacement and labeling",
                "Electrical safety inspections",
                "Code compliance and permit coordination"
            ],
            why: "Your electrical panel is the heart of your home’s power system. Upgrading it improves safety, prevents breaker trips and overheating, and prepares your home for future energy upgrades. A properly sized panel protects your home and ensures reliable performance across all electrical systems.",
            who: [
                "Homes with outdated or aging electrical panels",
                "Homeowners adding solar, EV chargers, or backup power",
                "Properties experiencing frequent breaker trips",
                "Homes upgrading appliances or expanding electrical usage"
            ],
            cta: {
                headline: "Is Your Electrical Panel Keeping Up?",
                text: "Schedule an electrical evaluation to see if a panel upgrade is right for your home.",
                button_text: "Request Panel Upgrade Consultation",
                link: "/contact"
            }
        }
    },
    {
        name: "Residential EV Charger Installation",
        brief: "EV Charger Installation",
        compact: "EV Chargers",
        desc: "Home charging made simple and safe",
        img: "/TD_solar_icon_home-ev.png",
        img_alt: "PlugZap / Car",
        details: {
            service: "Residential EV Charger Installation",
            slug: "residential-ev-charger-installation",
            hero: {
                title: "Residential EV Charger Installation",
                subtitle: "Convenient, reliable charging at home"
            },
            intro: "Charging your electric vehicle at home is one of the easiest ways to save time and money. TD Solar & Electric provides professional residential EV charger installations that are safe, code-compliant, and tailored to your home’s electrical system.",
            overview: "Installing an EV charger requires more than just mounting a unit on the wall. We ensure your electrical system can safely support the added load, install dedicated circuits when needed, and place your charger for maximum convenience and efficiency.",
            services_included: [
                "Home EV charger installation",
                "Dedicated circuit installation",
                "Electrical panel evaluation and upgrades if required",
                "Safe wiring and grounding",
                "Charger placement and mounting",
                "System testing and verification"
            ],
            why: "A professionally installed EV charger protects your home’s electrical system and ensures consistent, efficient charging. Proper installation reduces fire risks, prevents overloads, and prepares your home for future electric vehicle needs.",
            who: [
                "Homeowners purchasing or leasing electric vehicles",
                "Homes adding Level 2 charging capability",
                "Properties upgrading electrical capacity",
                "Families looking for convenient at-home charging"
            ],
            cta: {
                headline: "Ready to Charge at Home?",
                text: "Schedule a consultation with TD Solar & Electric for safe, professional EV charger installation.",
                button_text: "Schedule EV Charger Installation",
                link: "/contact"
            }
        }
    },
    {
        name: "Backup Battery Installation",
        brief: "Battery Backup",
        compact: "Battery Backup",
        desc: "Energy storage for outages and reliability",
        img: "/TD_solar_icon_ups.png",
        img_alt: "Battery Charging",
        details: {
            service: "Backup Battery Installation",
            slug: "backup-battery-installation",
            hero: {
                title: "Backup Battery Installation",
                subtitle: "Reliable energy storage when you need it most"
            },
            intro: "Power outages can happen without warning. TD Solar & Electric installs residential backup battery systems that store energy and keep essential systems running when the grid goes down.",
            overview: "Backup batteries provide seamless power during outages and help you make better use of solar energy. We install battery systems designed to provide reliable backup power, improve energy efficiency, and increase peace of mind.",
            services_included: [
                "Residential battery backup system installation",
                "Integration with existing solar systems",
                "Electrical system evaluation and preparation",
                "Battery mounting and secure placement",
                "System configuration and testing",
                "Safety checks and code compliance"
            ],
            why: "A backup battery system gives you peace of mind by providing reliable power during outages and reducing dependence on the grid. Proper installation ensures safe operation, efficient energy storage, and long-term performance.",
            who: [
                "Homes experiencing frequent power outages",
                "Solar homeowners looking to store excess energy",
                "Families needing backup power for essential systems",
                "Properties preparing for grid instability"
            ],
            cta: {
                headline: "Stay Powered During Outages",
                text: "Talk with TD Solar & Electric about backup battery options for your home.",
                button_text: "Schedule Battery Backup Consultation",
                link: "/contact"
            }
        }
    },
    {
        name: "Backup Generator Installation",
        brief: "Generator Backup",
        compact: "Generators",
        desc: "Standby power when the grid fails",
        img: "/TD_solar_icon_generator.png",
        img_alt: "Power / Generator",
        details: {
            service: "Backup Generator Installation",
            slug: "backup-generator-installation",
            hero: {
                title: "Backup Generator Installation",
                subtitle: "Dependable standby power for your home"
            },
            intro: "When extended power outages strike, a backup generator can keep your home running safely and comfortably. TD Solar & Electric provides professional residential backup generator installation to ensure reliable power when the grid goes down.",
            overview: "Backup generators automatically supply power during outages, keeping essential systems operational. We help homeowners choose properly sized generator solutions and handle the full installation process to ensure safe, dependable operation.",
            services_included: [
                "Residential standby generator installation",
                "Electrical system evaluation and load planning",
                "Automatic transfer switch installation",
                "Generator placement and mounting",
                "System wiring and integration",
                "Startup testing and safety verification"
            ],
            why: "A professionally installed generator protects your home from prolonged outages, prevents damage to appliances, and provides peace of mind during emergencies. Proper installation ensures reliable performance and safe operation for years to come.",
            who: [
                "Homes in areas prone to extended power outages",
                "Families needing reliable backup for essential systems",
                "Homeowners preparing for emergency situations",
                "Properties requiring uninterrupted power"
            ],
            cta: {
                headline: "Stay Powered During Outages",
                text: "Schedule a consultation with TD Solar & Electric to discuss backup generator options for your home.",
                button_text: "Request Generator Consultation",
                link: "/contact"
            }
        }
    },
    {
        name: "Electrical Troubleshooting",
        brief: "Electrical Troubleshooting",
        compact: "Troubleshooting",
        desc: "Fast diagnosis of electrical issues",
        img: "/TD_solar_icon_troubleshooting.png",
        img_alt: "AlertTriangle",
        details: {
            service: "Electrical Troubleshooting",
            slug: "electrical-troubleshooting",
            hero: {
                title: "Electrical Troubleshooting",
                subtitle: "Accurate diagnosis for electrical problems"
            },
            intro: "When electrical issues appear, guessing can be dangerous. TD Solar & Electric provides professional electrical troubleshooting to identify problems quickly, explain what’s happening, and resolve issues safely.",
            overview: "From flickering lights to tripped breakers and unexpected power loss, electrical problems can have many causes. We perform thorough diagnostics to locate the source of the issue and recommend clear, effective solutions.",
            services_included: [
                "Electrical system diagnostics",
                "Breaker and circuit troubleshooting",
                "Outlet, switch, and lighting inspections",
                "Power loss and intermittent issue investigation",
                "Identification of safety hazards",
                "Clear repair recommendations"
            ],
            why: "Electrical issues left unresolved can lead to damage, power interruptions, or serious safety risks. Proper troubleshooting ensures problems are fixed correctly the first time, protecting your home and preventing future issues.",
            who: [
                "Homes experiencing frequent electrical issues",
                "Properties with unexplained power loss",
                "Homeowners noticing flickering lights or tripping breakers",
                "Families concerned about electrical safety"
            ],
            cta: {
                headline: "Need Answers Fast?",
                text: "Schedule professional electrical troubleshooting with TD Solar & Electric today.",
                button_text: "Schedule Electrical Diagnosis",
                link: "/contact"
            }
        }
    },
    {
        name: "General Residential Electrical Contracting",
        brief: "Residential Electrical",
        compact: "Electrical Services",
        desc: "Reliable electrical services for homes",
        img: "/TD_solar_icon_residential_electrical.png",
        img_alt: "Home",
        details: {
            service: "General Residential Electrical Contracting",
            slug: "general-residential-electrical-contracting",
            hero: {
                title: "Residential Electrical Services",
                subtitle: "Safe, reliable electrical work for your home"
            },
            intro: "TD Solar & Electric provides professional residential electrical services to keep your home safe, functional, and up to modern standards. From small upgrades to larger electrical projects, we deliver dependable work backed by experience and attention to detail.",
            overview: "Electrical systems are critical to everyday comfort and safety. Whether you’re upgrading components, addressing electrical concerns, or improving functionality, we provide clean, code-compliant solutions tailored to your home’s needs.",
            services_included: [
                "Residential electrical repairs and upgrades",
                "Outlet, switch, and lighting installation",
                "Electrical system improvements",
                "Dedicated circuit installation",
                "Electrical safety inspections",
                "Code compliance corrections"
            ],
            why: "Quality electrical work protects your home, your family, and your investment. Proper installation and repairs reduce safety risks, improve reliability, and ensure your electrical system can support modern living without issue.",
            who: [
                "Homeowners needing electrical repairs or upgrades",
                "Homes updating lighting, outlets, or circuits",
                "Properties requiring safe, code-compliant electrical work",
                "Families looking for a trusted residential electrician"
            ],
            cta: {
                headline: "Need Residential Electrical Help?",
                text: "Contact TD Solar & Electric for professional, reliable electrical services for your home.",
                button_text: "Schedule Electrical Service",
                link: "/contact"
            }
        }
    }
]

export const servicearea = [
    "Nuevo, CA",
    "Perris, CA",
    "Menifee, CA",
    "Moreno Valley, CA",
    "Winchester, CA",
    "Hemet, CA",
    "Lakeview, CA",
    "Surrounding Inland Empire communities"

]

export const icon = [
    {
        name: "",
        img: ""
    },
    {
        name: "",
        img: ""
    },
    {
        name: "",
        img: ""
    },
    {
        name: "",
        img: ""
    },
    {
        name: "",
        img: ""
    },
    {
        name: "",
        img: ""
    }
]