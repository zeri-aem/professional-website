import {
  FolderCode,
  Zap,
  Database,
  BrainCog,
  Building2,
  Music,
  Piano,
} from "lucide-react";
import personalWebsite from "../assets/personal_website.png";
import traffic from "../assets/traffic_lights.png";
import check from "../assets/checkme.png";
import guitar from "../assets/carousel/musician/guitarist/guitar.jpg";
import guitar2 from "../assets/carousel/musician/guitarist/guitar2.jpg";
import guitar4 from "../assets/carousel/musician/guitarist/guitar4.jpg";
import guitar6 from "../assets/carousel/musician/guitarist/guitar6.png";
import guitar7 from "../assets/carousel/musician/guitarist/guitar7.jpg";
import guitar8 from "../assets/carousel/musician/guitarist/guitar8.png";
import singer from "../assets/carousel/musician/singer/singer1.png";
import singer2 from "../assets/carousel/musician/singer/singer2.png";
import singer3 from "../assets/carousel/musician/singer/singer3.jpg";
import singer4 from "../assets/carousel/musician/singer/singer4.png";
import singer5 from "../assets/carousel/musician/singer/singer5.jpg";
import band from "../assets/carousel/musician/band/band1.png";
import band2 from "../assets/carousel/musician/band/band2.jpg";
import band3 from "../assets/carousel/musician/band/band3.png";
import violin from "../assets/carousel/musician/violinist/violin.jpg";
import chess from "../assets/carousel/chess/chess.jpg";
import chess2 from "../assets/carousel/chess/chess2.jpg";

import cube from "../assets/carousel/cube/cube.jpg";

export const about = {
  background: [
    {
      id: 1,
      time: "Senior High School",
      text: `I began my technical journey during Senior High School, taking up the STEM strand at Perpetual Help System DALTA – Calamba. This stage strengthened my foundation in mathematics, science, and technology while introducing me to technical and analytical problem-solving. Through hands-on activities and my immersion experience, I gained my first exposure to electronics, hardware troubleshooting, and quality-focused work, which sparked my interest in pursuing engineering and technology as a career.`,
    },
    {
      id: 2,
      time: "College",
      text: `I discovered my passion for programming during college at Mapúa
    Malayan Colleges Laguna while pursuing a degree in Electronics
    Engineering. Alongside my Electronics Engineering studies, I
    independently studied software engineering and programming. This
    allowed me to develop knowledge in electronics systems and
    technologies, telecommunications, cybersecurity, and networking,
    while also building my skills in programming, software
    development, data structures and algorithms,
    object-oriented programming, and more.`,
    },
    {
      id: 3,
      time: "Career",
      text: `After graduating from college, I spent six months preparing for
    the ECE and ECT board examinations while travelling from Laguna
    to Manila almost every day. I successfully passed both
    examinations on my first attempt and became a Licensed
    Electronics Engineer and Licensed Electronics Technician. After
    obtaining my licenses, I continued building my career in
    software engineering, gaining experience in enterprise
    applications, technical support, and software development, while
    continuing to transition toward modern software engineering
    practices.`,
    },
  ],
  whatIdo: [
    {
      id: 1,
      Icon: FolderCode,
      title: "Software Development",
      description:
        "Building responsive and maintainable applications using modern software technologies.",
    },
    {
      id: 2,
      Icon: Zap,
      title: "Electronics Engineering",
      description:
        "Applying my electronics engineering background to hardware, signals, and communication systems.",
    },
    {
      id: 3,
      Icon: Database,
      title: "Data Engineering",
      description:
        "Working with data pipelines, databases, and processing systems to turn data into useful insights.",
    },
    {
      id: 4,
      Icon: BrainCog,
      title: "AI Development",
      description:
        "Developing intelligent systems using machine learning, computer vision, and data-driven approaches.",
    },
    {
      id: 5,
      Icon: Building2,
      title: "Application Support",
      description:
        "Maintaining, troubleshooting, and improving enterprise applications to keep systems reliable.",
    },
  ],
  beyondCode: [
    {
      id: 1,
      type: "Musician",
      title: "I am a Musician",
      content: [
        {
          id: 1,
          topic: "Guitarist",
          images: [
            { id: 1, image: guitar },
            { id: 2, image: guitar2 },
            { id: 5, image: guitar6 },
            { id: 4, image: guitar4 },
            { id: 6, image: guitar7 },
            { id: 7, image: guitar8 },
          ],
          description:
            "A guitarist with over **18 years of experience**, starting at the age of six. Throughout the years, I have performed in various **competitions, guest performances, and impromptu jam sessions**, gaining experience in both structured performances and spontaneous musical settings. From playing for an audience to joining unexpected jam sessions, I have always enjoyed the freedom and creativity that the guitar provides.\n\nI play both **acoustic and electric guitar**, allowing me to explore different styles, tones, and approaches to playing. As a **lead guitarist**, I have a particular passion for **solos, improvisation, and melodic expression**. I enjoy exploring melodies, creating guitar lines on the spot, and finding ways to complement the music rather than simply following it.\n\nOver the years, the guitar has become more than just an instrument for me, it has become one of my main forms of **musical expression**. I particularly enjoy improvising and experimenting with different notes, phrasing, and techniques to create solos that feel natural and expressive. Whether playing an acoustic arrangement or performing an electric guitar solo, I enjoy bringing **energy, emotion, and personality** into every performance.\n\nMy experience with both acoustic and electric guitar has also allowed me to appreciate the different roles the instrument can play in music, from **rhythm and accompaniment to melodic leads and improvisation**. I continue to explore new techniques and styles while developing my own identity as a guitarist and lead musician.",
        },
        {
          id: 2,
          topic: "Singer",
          images: [
            { id: 1, image: singer5 },
            { id: 2, image: singer },
            { id: 3, image: singer2 },
            { id: 4, image: singer3 },
            { id: 5, image: singer4 },
          ],
          description:
            "A singer with over **21 years of singing experience**, having started at a very young age. Over the years, I have pursued opportunities to perform and showcase my voice, including auditioning for competitions such as **The Voice Kids** and **The Clash**.\n\nI have performed at various school events, restaurants, bars, and other venues, as well as participated in spontaneous and impromptu jam sessions. My experience spans different locations, including **Vigan, Olongapo, Taguig, and Laguna**, where I have performed for a variety of events and audiences. I also enjoy creating **song covers**, allowing me to explore different vocal styles and arrangements.\n\nMy preferred genres include **R&B, slow rock, and pop**, which allow me to explore different vocal styles and express emotion through my performances. I enjoy adapting my singing to different settings and audiences while bringing my own style and personality to each performance.\n\nBeyond performing, I am also a **self-taught audio mixer**, particularly interested in **vocal recording and processing**. With my background in **Electronics Engineering**, where I have studied signals and signal processing, I have developed a technical understanding of how audio signals behave and how they can be shaped through **EQ, compression, effects, and other mixing techniques**. I apply this knowledge to my own recordings and covers to achieve a cleaner and more polished vocal sound.",
        },
        {
          id: 3,
          topic: "Song Composer",
          images: [{ id: 1, image: Music }],
          description:
            "A songwriter and composer who started writing music at the age of **11** and has since written over **30 original songs**. My songwriting is primarily focused on expressing emotions and experiences through both **Filipino and English** lyrics.\n\nI mostly write songs about **happy love, heartbreak, and emotional love stories**, as well as themes of **friendship and camaraderie**. While I have not officially released any of my original compositions yet, songwriting has remained an important part of my musical journey and creative expression.",
        },
        {
          id: 4,
          topic: "Band",
          images: [
            { id: 1, image: band },
            { id: 2, image: band2 },
            { id: 3, image: band3 },
          ],
          description:
            "Formed in **2016**, our band started as a group of high school boys who shared the same passion: performing music with all our hearts while showcasing our dedication and finesse with our respective instruments.\n\nI serve as the **lead guitarist and lead vocalist** of the band. We primarily play **pop, slow rock, hard rock, alternative rock, and indie rock**. The band originally consisted of four members: two guitarists, one bass player, and one drummer. When our bassist moved to another province, our rhythm guitarist took over the bass, while I took on multiple roles as the **rhythm guitarist, lead guitarist, and vocalist**.\n\nDuring our junior high school years, we participated in various competitions and continued developing our chemistry as musicians. Today, whenever we have free time, we still get together to jam, create short videos, and simply enjoy making music together.\n\nMore than the performances, competitions, or the music itself, what makes this band special to me is that **we are still here**. After all these years, we remain close friends and continue to share the same joy of playing our instruments and creating music together. The friendship we built through the band is something I deeply cherish and hope to carry with me for the rest of my life.",
        },
        {
          id: 5,
          topic: "Violinist",
          images: [{ id: 1, image: violin }],
          description:
            "I am currently a **beginner violinist**, having started my violin journey on **August 16, 2026**. Although I have only just begun learning the instrument, I have set an ambitious long-term goal of performing **Paganini's Caprice No. 24**, inspired particularly by **Chloe Chua's** performance of the piece.\n\nI am deeply inspired by violinists such as **Chloe Chua, TwoSet Violin, and Ray Chen**, who have motivated me to pursue the goal of becoming a **virtuoso violinist** someday. Among them, Chloe Chua has especially inspired me through her **elegance, exceptional intonation, precision, and technical mastery**.\n\nWhile I am still at the very beginning of my violin journey, I look forward to developing my **intonation, bow control, technique, musicality, and overall expression** over the years as I work toward my goal of eventually performing one of the most iconic and technically demanding pieces in the violin repertoire.",
        },
        {
          id: 6,
          topic: "Pianist",
          images: [{ id: 1, image: Piano }],
          description:
            "I was first introduced to the **piano during my junior high school years**, when I took piano lessons for a period of time. Although I eventually stopped and did not continue my lessons, my interest in the instrument has recently returned and I am now excited to **learn piano again and incorporate it into my musical journey**.\n\nI am planning to get a piano soon and eventually include it in one of my **music covers**, combining it with the other instruments I play. With my existing background in **music theory, guitar, singing, and violin**, I expect to be able to transition into piano relatively quickly compared to someone completely new to music.\n\nMy goal is to develop a solid foundation in **piano technique, chord voicings, accompaniment, melody, and musical expression**, while eventually using the instrument as another way to create, arrange, and perform music.",
        },
      ],
    },
    {
      id: 2,
      type: "Chess",
      title: "I am a Chess Player",
      content: [
        {
          id: 1,
          topic: "Chess",
          images: [
            { id: 1, image: chess },
            { id: 1, image: chess2 },
          ],
          description:
            "I have been playing chess since I was very young, having been introduced to the game by my mom and my uncle at an early age. With my mother also being a **chess coach and school teacher representative**, I was exposed to chess tournaments from a young age and developed a strong passion for the game.\n\nDuring my elementary years, I became the **chess champion from Grade 4 to Grade 6**. I later became a **finalist during my junior high school years** and eventually became the **chess champion during Senior High School**.\n\nMy favorite opening is the **Queen's Gambit**, which I have enjoyed playing even before *The Queen's Gambit* series became popular. I particularly appreciate its **elegance, safe positioning, and strategic approach to controlling the center** of the board. Rather than relying solely on aggressive attacks, I enjoy playing patiently, **gradually building an advantage and defeating my opponent through careful positioning and strategy**.",
        },
      ],
    },
    {
      id: 3,
      type: "Rubik's Cube",
      title: "I am a 3x3 Rubik's Cube Champion",
      content: [
        {
          id: 1,
          topic: "Rubik's Cube",
          images: [{ id: 1, image: cube }],
          description:
            "I have been passionate about solving the **Rubik's Cube** since my junior high school days and have continued solving it up to the present. During **Grade 8, I became the Rubik's Cube champion** of our school, which led to what became a memorable and competitive tradition among my fellow students.\n\nAfter school, students would often challenge me to **head-to-head 3x3 solving competitions**, where whoever could achieve the fastest solve time would win. This became a regular challenge from **Grade 8 through Grade 10**, with students continuing to challenge me even as I approached my moving-up ceremony. These experiences made my junior high school years especially fun and memorable.\n\nBeyond competing, I have also **taught friends and cousins how to solve the Rubik's Cube**, including techniques and methods for improving their solving speed. My interest in cubing eventually led me to experiment with developing my own algorithms and permutations.\n\nAt **15 years old**, I developed and documented my own sequence called **MLS — Malacas Last Slot**. It is a custom permutation designed to be used **after F2L and right before finishing OLL**, creating a specific pattern that can effectively solve the cube while **skipping the PLL stage entirely**. Developing my own algorithm became one of the most memorable achievements of my cubing journey and reflects my interest in not only solving puzzles, but also **understanding, experimenting with, and creating new solutions for them**.",
        },
      ],
    },
  ],
};
