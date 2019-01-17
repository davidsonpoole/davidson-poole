import React, { Component } from 'react'
import styles from './Blog.css'
import atlanta from '../images/atlanta.jpg'
class Blog extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={styles.home}>
                <img src={atlanta} alt="" className={styles.atlanta} />
                <div className={styles.content}>
                    <div className={styles.headerDiv}>
                        <p style={{ color: "white", fontSize: "25px", fontFamily: "Quicksand, sans-serif", width: "100vw"}}>“Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful... that's what matters to me.”</p>
                        <p style={{ color: "white", fontFamily: "Quicksand, sans-serif", fontSize: "15px" }}>-Steve Jobs</p>
                    </div>
                    <div className={styles.article}>
                        <h1 className={styles.title}>Why Do Developers Use Linux?</h1>
                        <p className={styles.date}>Wednesday, January 16, 2019</p>
                        <p className={styles.articleContent}>    I can remember being ten years old, and going to my Aunt and Uncle’s house. I always loved going to my
                            Aunt and Uncle’s house, because they were the cool relatives. Not the ones that made strange food and had more rules
                            than even my parents did. But the ones that lived in Atlanta, didn’t care when I went to bed, and always had the newest
                            video games. While I enjoyed being with the both of them, it was my Uncle that I really looked forward to seeing. He was
                            an adult that rode skateboards, played video games, and most impressive of all to me, as a very impressionable
                            ten-year-old, was the fact that he was a programmer, or as I would have said, “a hacker”. I remember sitting on the
                            couch with him and my Aunt, <br />while he was setting up whatever Kodi(then, XBMC) setup on the TV. He pulled it up only
                            to find that it wasn’t working. Unfazed, on his laptop he pulled up a mysterious black window that had his name followed
                            by dollar-sign. He started typing some gobbledegook onto the screen, which was followed by some unreadble wall of text.
                            He does this a couple times, closes the black box, pulls up the movie, sits back down, and says “there ya go”. And I’m just
                            sitting there stupefied at the magic that had just occurred. I ask him, “what was that?”, to which he replied simply, “That’s
                            the terminal my friend”. After that day, I was obsessed. I wanted to be a hacker, I wanted to use the magical black box
                            called the terminal, and impress my all my prepubescent friends. I installed Linux, and tried my hardest to learn what to
                            do with it. I spent almost 4 years trying to learn the art of magic, and trying to find cool actions I could preform in order
                            to do cool stuff. Towards the end I tried to learn a little Python. I insisted to all my dirty windows-using friends that
                            Linux was what the professionals use, only to be followed by condescending laughs. Eventually I grew tired of the ridicule
                            I received  for my choice of operating system, and bought myself a copy of Windows. I used this for quite a while until my
                            interest in programming was revived. I switched back to mainly using Linux around six months ago, and I’ve been working on
                            my web development skills since then. Throughout this time I still didn’t completely understand why the majority of developers
                            use either OSX or Linux. Or at least not until recently. I watched many videos and read many articles about the subject,
                            but almost none of them seemed to explain very well why this is. In the process of deploying a Rails app, it suddenly came
                            to me: this is why people use Linux. I won’t be as arrogant to say this is definitively the reason why, but this was my
                            eureka moment. Put in the most concise way possible, I believe the primary reason that the majority of developers use Linux
                            are as follows: it’s philosphy of freedom, it’s structural differences from Windows, the pure power of the command line
                            (Ok so I don’t talk about this in this article, but I plan to write one at some point in the future explaining it. I’ll
                            make this a link) , and it’s widespread use in servers. Linux would not be Linux without open source, quite literally.
                            Linux itself is open source, as well as the majority of it’s distributions and software being open source as well. To a
                            developer, their computer is their tool bench. A craftsman has very specific requirements and preferences for the tools
                            they use. This almost anal attention to detail is not an eccentricity, it is a necessity. A person who works on their car
                            as a hobby does not really care about the way their wrench feels, or the maximum amount of stress their wrench can take.
                            However, for a mechanic that works on cars eight hours a day, five days a week, the difference between two wrenches can
                            mean the difference between frustration and struggle, and pain-free smooth work. Anyone who does a precursory investigation
                            into the internals of a Linux distribution and a Windows installation could recognize the glaring differences in philosophy
                            of the filesystems. Explained plainly in human-speak, take an example of two mechanic shops. One mechanic shop, let’s call
                            it Mike’s Mechanic Central, organizes its tools into kits. These kits they use exclusively for specific jobs. They have a
                            kit for changing the oil, which might include an 8mm wrench, a bucket, and a funnel. They might also have a kit for adding
                            new coolant, which might include an 10mm wrench, a bucket, and a funnel. While some of the tools may technically be able
                            to be used another kit, others might not. Each tool belongs to each kit and necessarily wouldn’t be used for any other
                            job.  Now the second mechanic shop does things a little bit differently(They work on European Cars 😉  ), let’s call
                            them Auto Workers Wordwide. They organize their tools, not in kits, but groups. They label each specific tool for its use,
                            and place it in a tool box with all of the tools similar to it. For example, Auto Workers Worldwide would place all of
                            its funnels in the funnel box, which would contain funnels for oil, as well as funnels for coolant. In this analogy, Mike’s
                            Mechanic Central would be the Windows system of organization, while Auto Workers Worldwide would be using the Linux
                            system of organization.  The jobs done represent programs, while the tools represent the individual components of the
                            program.  The Linux way of organization,  aptly named Filesystem Hierarchy Standard (FHS), while appearing counter-
                            intuitive, has two major advantages. Firstly it establishes a rudimentary scaffold for programs developed for the
                            environment. In a skill that requires flexibility to learn new tools, it allows someone unfamiliar to a tool to gain an
                            elementary understanding quickly. To understand a component(or a tool) more generally, it must be seen within the context
                            of components(or tool) that serve different functions. If a potentiometer is used to check the voltage of a battery,
                            the user might not make the connection mentally how it might be used in a different context. This means that a person
                            familiar with FHS would be able to quickly get a general idea of how a program operates. Another main reason that
                            developers choose to use Linux is because its widespread use in servers today. According to the 2014 Enterprise End
                            User Report made by the Linux Foundation and Yeoman Technology Group, somewhere within the ballpark of 75% of Enterprise
                            servers are run on Linux. Which is a super-majority of servers. </p>
                    </div>
                    <div className={styles.article}>
                        <h1 className={styles.title}>Why Do Developers Use Linux?</h1>
                        <p className={styles.date}>Wednesday, January 16, 2019</p>
                        <p className={styles.articleContent}>    I can remember being ten years old, and going to my Aunt and Uncle’s house.<br />I always loved going to my
                            Aunt and Uncle’s house, because they were the cool relatives. Not the ones that made strange food and had more rules
                            than even my parents did. But the ones that lived in Atlanta, didn’t care when I went to bed, and always had the newest
                            video games. While I enjoyed being with the both of them, it was my Uncle that I really looked forward to seeing. He was
                            an adult that rode skateboards, played video games, and most impressive of all to me, as a very impressionable
                            ten-year-old, was the fact that he was a programmer, or as I would have said, “a hacker”. I remember sitting on the
                            couch with him and my Aunt, <br />while he was setting up whatever Kodi(then, XBMC) setup on the TV. He pulled it up only
                            to find that it wasn’t working. Unfazed, on his laptop he pulled up a mysterious black window that had his name followed
                            by dollar-sign. He started typing some gobbledegook onto the screen, which was followed by some unreadble wall of text.
                            He does this a couple times, closes the black box, pulls up the movie, sits back down, and says “there ya go”. And I’m just
                            sitting there stupefied at the magic that had just occurred. I ask him, “what was that?”, to which he replied simply, “That’s
                            the terminal my friend”. After that day, I was obsessed. I wanted to be a hacker, I wanted to use the magical black box
                            called the terminal, and impress my all my prepubescent friends. I installed Linux, and tried my hardest to learn what to
                            do with it. I spent almost 4 years trying to learn the art of magic, and trying to find cool actions I could preform in order
                            to do cool stuff. Towards the end I tried to learn a little Python. I insisted to all my dirty windows-using friends that
                            Linux was what the professionals use, only to be followed by condescending laughs. Eventually I grew tired of the ridicule
                            I received  for my choice of operating system, and bought myself a copy of Windows. I used this for quite a while until my
                            interest in programming was revived. I switched back to mainly using Linux around six months ago, and I’ve been working on
                            my web development skills since then. Throughout this time I still didn’t completely understand why the majority of developers
                            use either OSX or Linux. Or at least not until recently. I watched many videos and read many articles about the subject,
                            but almost none of them seemed to explain very well why this is. In the process of deploying a Rails app, it suddenly came
                            to me: this is why people use Linux. I won’t be as arrogant to say this is definitively the reason why, but this was my
                            eureka moment. Put in the most concise way possible, I believe the primary reason that the majority of developers use Linux
                            are as follows: it’s philosphy of freedom, it’s structural differences from Windows, the pure power of the command line
                            (Ok so I don’t talk about this in this article, but I plan to write one at some point in the future explaining it. I’ll
                            make this a link) , and it’s widespread use in servers. Linux would not be Linux without open source, quite literally.
                            Linux itself is open source, as well as the majority of it’s distributions and software being open source as well. To a
                            developer, their computer is their tool bench. A craftsman has very specific requirements and preferences for the tools
                            they use. This almost anal attention to detail is not an eccentricity, it is a necessity. A person who works on their car
                            as a hobby does not really care about the way their wrench feels, or the maximum amount of stress their wrench can take.
                            However, for a mechanic that works on cars eight hours a day, five days a week, the difference between two wrenches can
                            mean the difference between frustration and struggle, and pain-free smooth work. Anyone who does a precursory investigation
                            into the internals of a Linux distribution and a Windows installation could recognize the glaring differences in philosophy
                            of the filesystems. Explained plainly in human-speak, take an example of two mechanic shops. One mechanic shop, let’s call
                            it Mike’s Mechanic Central, organizes its tools into kits. These kits they use exclusively for specific jobs. They have a
                            kit for changing the oil, which might include an 8mm wrench, a bucket, and a funnel. They might also have a kit for adding
                            new coolant, which might include an 10mm wrench, a bucket, and a funnel. While some of the tools may technically be able
                            to be used another kit, others might not. Each tool belongs to each kit and necessarily wouldn’t be used for any other
                            job.  Now the second mechanic shop does things a little bit differently(They work on European Cars 😉  ), let’s call
                            them Auto Workers Wordwide. They organize their tools, not in kits, but groups. They label each specific tool for its use,
                            and place it in a tool box with all of the tools similar to it. For example, Auto Workers Worldwide would place all of
                            its funnels in the funnel box, which would contain funnels for oil, as well as funnels for coolant. In this analogy, Mike’s
                            Mechanic Central would be the Windows system of organization, while Auto Workers Worldwide would be using the Linux
                            system of organization.  The jobs done represent programs, while the tools represent the individual components of the
                            program.  The Linux way of organization,  aptly named Filesystem Hierarchy Standard (FHS), while appearing counter-
                            intuitive, has two major advantages. Firstly it establishes a rudimentary scaffold for programs developed for the
                            environment. In a skill that requires flexibility to learn new tools, it allows someone unfamiliar to a tool to gain an
                            elementary understanding quickly. To understand a component(or a tool) more generally, it must be seen within the context
                            of components(or tool) that serve different functions. If a potentiometer is used to check the voltage of a battery,
                            the user might not make the connection mentally how it might be used in a different context. This means that a person
                            familiar with FHS would be able to quickly get a general idea of how a program operates. Another main reason that
                            developers choose to use Linux is because its widespread use in servers today. According to the 2014 Enterprise End
                            User Report made by the Linux Foundation and Yeoman Technology Group, somewhere within the ballpark of 75% of Enterprise
                            servers are run on Linux. Which is a super-majority of servers. </p>
                    </div>
                    <div className={styles.article}>
                        <h1 className={styles.title}>Why Do Developers Use Linux?</h1>
                        <p className={styles.date}>Wednesday, January 16, 2019</p>
                        <p className={styles.articleContent}>    I can remember being ten years old, and going to my Aunt and Uncle’s house.<br />I always loved going to my
                            Aunt and Uncle’s house, because they were the cool relatives. Not the ones that made strange food and had more rules
                            than even my parents did. But the ones that lived in Atlanta, didn’t care when I went to bed, and always had the newest
                            video games. While I enjoyed being with the both of them, it was my Uncle that I really looked forward to seeing. He was
                            an adult that rode skateboards, played video games, and most impressive of all to me, as a very impressionable
                            ten-year-old, was the fact that he was a programmer, or as I would have said, “a hacker”. I remember sitting on the
                            couch with him and my Aunt, <br />while he was setting up whatever Kodi(then, XBMC) setup on the TV. He pulled it up only
                            to find that it wasn’t working. Unfazed, on his laptop he pulled up a mysterious black window that had his name followed
                            by dollar-sign. He started typing some gobbledegook onto the screen, which was followed by some unreadble wall of text.
                            He does this a couple times, closes the black box, pulls up the movie, sits back down, and says “there ya go”. And I’m just
                            sitting there stupefied at the magic that had just occurred. I ask him, “what was that?”, to which he replied simply, “That’s
                            the terminal my friend”. After that day, I was obsessed. I wanted to be a hacker, I wanted to use the magical black box
                            called the terminal, and impress my all my prepubescent friends. I installed Linux, and tried my hardest to learn what to
                            do with it. I spent almost 4 years trying to learn the art of magic, and trying to find cool actions I could preform in order
                            to do cool stuff. Towards the end I tried to learn a little Python. I insisted to all my dirty windows-using friends that
                            Linux was what the professionals use, only to be followed by condescending laughs. Eventually I grew tired of the ridicule
                            I received  for my choice of operating system, and bought myself a copy of Windows. I used this for quite a while until my
                            interest in programming was revived. I switched back to mainly using Linux around six months ago, and I’ve been working on
                            my web development skills since then. Throughout this time I still didn’t completely understand why the majority of developers
                            use either OSX or Linux. Or at least not until recently. I watched many videos and read many articles about the subject,
                            but almost none of them seemed to explain very well why this is. In the process of deploying a Rails app, it suddenly came
                            to me: this is why people use Linux. I won’t be as arrogant to say this is definitively the reason why, but this was my
                            eureka moment. Put in the most concise way possible, I believe the primary reason that the majority of developers use Linux
                            are as follows: it’s philosphy of freedom, it’s structural differences from Windows, the pure power of the command line
                            (Ok so I don’t talk about this in this article, but I plan to write one at some point in the future explaining it. I’ll
                            make this a link) , and it’s widespread use in servers. Linux would not be Linux without open source, quite literally.
                            Linux itself is open source, as well as the majority of it’s distributions and software being open source as well. To a
                            developer, their computer is their tool bench. A craftsman has very specific requirements and preferences for the tools
                            they use. This almost anal attention to detail is not an eccentricity, it is a necessity. A person who works on their car
                            as a hobby does not really care about the way their wrench feels, or the maximum amount of stress their wrench can take.
                            However, for a mechanic that works on cars eight hours a day, five days a week, the difference between two wrenches can
                            mean the difference between frustration and struggle, and pain-free smooth work. Anyone who does a precursory investigation
                            into the internals of a Linux distribution and a Windows installation could recognize the glaring differences in philosophy
                            of the filesystems. Explained plainly in human-speak, take an example of two mechanic shops. One mechanic shop, let’s call
                            it Mike’s Mechanic Central, organizes its tools into kits. These kits they use exclusively for specific jobs. They have a
                            kit for changing the oil, which might include an 8mm wrench, a bucket, and a funnel. They might also have a kit for adding
                            new coolant, which might include an 10mm wrench, a bucket, and a funnel. While some of the tools may technically be able
                            to be used another kit, others might not. Each tool belongs to each kit and necessarily wouldn’t be used for any other
                            job.  Now the second mechanic shop does things a little bit differently(They work on European Cars 😉  ), let’s call
                            them Auto Workers Wordwide. They organize their tools, not in kits, but groups. They label each specific tool for its use,
                            and place it in a tool box with all of the tools similar to it. For example, Auto Workers Worldwide would place all of
                            its funnels in the funnel box, which would contain funnels for oil, as well as funnels for coolant. In this analogy, Mike’s
                            Mechanic Central would be the Windows system of organization, while Auto Workers Worldwide would be using the Linux
                            system of organization.  The jobs done represent programs, while the tools represent the individual components of the
                            program.  The Linux way of organization,  aptly named Filesystem Hierarchy Standard (FHS), while appearing counter-
                            intuitive, has two major advantages. Firstly it establishes a rudimentary scaffold for programs developed for the
                            environment. In a skill that requires flexibility to learn new tools, it allows someone unfamiliar to a tool to gain an
                            elementary understanding quickly. To understand a component(or a tool) more generally, it must be seen within the context
                            of components(or tool) that serve different functions. If a potentiometer is used to check the voltage of a battery,
                            the user might not make the connection mentally how it might be used in a different context. This means that a person
                            familiar with FHS would be able to quickly get a general idea of how a program operates. Another main reason that
                            developers choose to use Linux is because its widespread use in servers today. According to the 2014 Enterprise End
                            User Report made by the Linux Foundation and Yeoman Technology Group, somewhere within the ballpark of 75% of Enterprise
                            servers are run on Linux. Which is a super-majority of servers. </p>
                    </div>
                </div>


            </div>
        )
    }
}

export default Blog;
