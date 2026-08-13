import dxcLogo from "../assets/dxc.png";
import stmLogo from "../assets/stm.png";
import creoLogo from "../assets/creotec.png";

export const experiences = [
  {
    id: 1,
    logo: dxcLogo,
    alt: "DXC Technology Logo",
    title: "Analyst II - Software Engineering",
    company: "DXC Technology",
    description:
      "Working as an Application Development and Support Engineer for a top-tier Australian life insurance client, providing application maintenance, technical support, and backend development for enterprise-level systems. Responsible for analyzing and resolving application issues, performing system enhancements, supporting business-critical applications, and working with technologies such as COBOL and SQL to ensure the reliability, stability, and continuous operation of core insurance systems.",
    start_date: "Sep 2025",
    end_date: "Present",
    techStack: ["SQL", "COBOL", "CL"],
    responsibilities: [
      "Authoring technical documentation, incident reports, SOPs, and business-facing presentations to support knowledge sharing and operational continuity.",
      "Analyzing, developing, and debugging applications using SQL, COBOL, and CL programs within enterprise systems.",
      "Provided cross-team support for other systems during scheduled system upgrades, maintenance activities, and weekend implementation activities to ensure smooth and successful deployments.",
      "Collaborating with cross-functional teams (engineers, PMs, business users) to improve system reliability, and workflow efficiency.",
    ],
    achievements: [
      "Consistently supported business and IT users by applying technical expertise to troubleshoot, analyze, and resolve application and data-related issues, including implementing effective workarounds and data fixes.",
      "Earned positive recognition from business users and stakeholders for effectively diagnosing issues, resolving incidents, and providing timely technical assistance.",
      "Authored and maintained a wide range of technical and operational documentation, including SOPs, incident and request data-fix documentation, workflow documentation, weekly plans and status updates, and meeting minutes used for project tracking and business presentations.",
      "Managed and resolved a high volume of incidents, service requests, problems, and change requests throughout the year, contributing to the stability and continuity of business-critical applications.",
      "Maintained comprehensive tracking and documentation of incidents, requests, problems, and changes, providing project stakeholders with accurate information for monitoring, reporting, and decision-making.",
    ],
  },
  {
    id: 2,
    logo: stmLogo,
    alt: "STMicroelectronics Logo",
    title: "Software Engineer Intern",
    company: "STMicroelectronics",
    description:
      "Worked as a Software Engineer Intern under the On-the-Job Training Program of Malayan Colleges Laguna, initially assigned to the Final Test Finishing Engineering Department before transitioning into a software development role. Gained hands-on experience in software development, automation, data processing, and production engineering support, developing solutions to improve data collection, monitoring, and operational efficiency within a manufacturing environment. Collaborated with engineers in troubleshooting production issues, maintaining production processes, and supporting the continuous improvement of manufacturing operations.",
    start_date: "May 2024",
    end_date: "Oct 2024",
    techStack: ["Python", "Microsoft Power BI"],
    responsibilities: [
      "Developed and maintained a Python application using OpenPyXL, Pandas, Tkinter, ftplib, hashlib, threading, and logging to automate data extraction from production machines and support real-time Power BI monitoring and visualization.",
      "Authored comprehensive documentation and collaborated with engineers to maintain production lines, troubleshoot failures, and ensure optimal operations.",
      "Analyzed, troubleshot, and maintained manufacturing equipment used in the production of ICs for consumer electronics, automotive, and other industries.",
    ],
    achievements: [
      "Developed 3000+ line Python application (openpyxl, pandas, ftplib, hashlib, Tkinter, threading, logging) with modular, object-oriented architecture to automate data extraction from production machines and enable real-time Power BI monitoring and visualization.",
      "Designed modern, user-friendly GUI with authorization, light/dark mode, and seamless frontend-backend integration, including automated Excel data conversion via FTP servers.",
    ],
  },
  {
    id: 3,
    logo: creoLogo,
    alt: "Creotec Philippines Logo",
    title: "Electronics Rework Technician Intern",
    company: "Creotec Philippines Inc.",
    description:
      "Worked as a Technician Trainee under the Senior High School Immersion Program of the University of Perpetual Help System DALTA – Calamba, gaining hands-on experience in electronics hardware testing, PCB inspection, troubleshooting, repair, and quality control. Assisted in identifying and resolving hardware defects through soldering, component inspection, and electrical testing using a multimeter. Developed practical knowledge of electronics repair processes while adhering to workplace safety standards, professional work ethics, and Japanese 5S methodology. The experience strengthened my technical problem-solving skills, attention to detail, discipline, and ability to work in an organized production environment while promoting continuous improvement and quality-focused practices.",
    start_date: "Feb 2020",
    end_date: "Mar 2020",
    techStack: ["Electronics"],
    responsibilities: [
      "Served as Student Trainee during Senior High School Immersion Program, gaining hands-on experience in electronics hardware testing and quality control.",
      "Repaired defective PCBs through soldering, troubleshooting, and inspection using multimeter.",
      "Applied professional work ethics and Japenese 5S methodology, demonstrating responsibility, orderliness, and continuous improvement.",
    ],
    achievements: [
      "Successfully repaired defective PCBs through soldering, electrical troubleshooting, and component inspection using a multimeter, gaining practical experience in electronics hardware repair and quality control.",
      "Demonstrated professional work ethics and applied Japanese 5S methodology in the workplace, maintaining an organized, disciplined, and quality-focused working environment while supporting continuous improvement practices.",
    ],
  },
];
