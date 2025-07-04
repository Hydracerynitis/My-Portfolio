<script setup>
import paragraph from '/src/components/paragraph.vue';
</script>

<template>
    <paragraph imageName="CovidHome" title="Covid Contact Webapp" subtitle="Web App Overview"
    :imageSize=6>
        <p class="mt-3">This webapp is built as an illustration of my software development knowledge learned from the
            2021 MSA Web Ddevelopment program, which earns me a Certificate of Completion on Software Developement Pathway</p>
        <p class="mt-3">The webapp follows <b>Model-View-Controller</b> architecture. Its frontend client is built with 
            <b>React</b> and its package <b>Material UI</b> and <b>StoryBook</b>. Its back end server is based on 
            <b>GraphQL</b> and <b>HotChocolate</b>. I then use <b>Apollo Client</b> to provide backend server's queries 
            and mutations to frontend client. Beside that, I also employ <b>Jest</b> and <b>Github Authentication</b> to 
            help aid my development process.
        </p>
    </paragraph>
    <paragraph imageName="CovidDiary" title="Premise of Covid Contact App" subtitle="Application Logic"
            :imageRight="true" :imageSize=6>
        <p class="mt-3">The premise of the webapp is to provide users with a tool to keep track of their travel histories
            and allow webapp to sort out whether they have become close contacts. Its business logic is that whenever a user 
            tagged themselves as infected after being diagonised as positive, the server will mark or his travel destinations
            as points of interests. Then it will flag other users that share point of interest at the same time as clost contact
            and notify them when they login in.</p>
        <p class="mt-3">The color of UI elements will also change based on users' Covid 19 status. At default, the UI elements remain
            <span style="color:#4caf50 ; font-weight: 600;">green</span>. After users tage themselves as infested, the UI elements 
            will switch to <span style="color:#e65100 ; font-weight: 600;">red</span>, an indication of being contacted with 
            a dangerous disease. When the server have found out that users have become a clost contact, the UI elements will 
            change to <span style="color:#ff8f00 ;font-weight: 600;">orange</span>, serving as a reminder to get themselves 
            tested.</p>
    </paragraph>
    <paragraph imageName="CovidModel" title="Data Structure in the Server" subtitle="Data Model"
        :imageSize="6">
        <p class="mt-3">The data strucuture is composed of three tables to manage the application logic:
            <b>AppUser</b>, <b>Entry</b>, <b>Destination</b>
        </p>
        <p class="ms-4"><b>AppUser</b> records users' profile information, their Covid 19 status and their
            travel entries.</p>
        <p class="ms-4"><b>Entry</b> records the user who record it, the destination of the user and time
            user arrive and exit said destination</p>
        <p class="ms-4"><b>Destination</b> records the address and all entries that reference it. Whenever
            a "Entry" row is inserted into the table, the destination that the new entry reference will also record its primary
            key. If the destination that new entry row is not in the table, then a new destination row will be generated.</p>
        <p class="ms-5">In this process, destination are recognized based on unique combincation of name and address.</p>
        <p class="mt-3">The application logic is implemented in the following way:</p>
        <p class="ms-4">When users flag themselves as infested, all entriess they uploaded will be flagged as interested. Then,
            foreach newly flagged entry its destination will search for entries that entered before the infested
            leave. After that, the server will tagged all users who these entries belong to as clost contact.
        </p>
        <p class="mt-3">For more details regarding this web application, you can check its code repository.</p>
        <a href="https://github.com/Hydracerynitis/MSA-Assessment" class="btn btn-style mt-3">Link to Repository</a>
    </paragraph>
</template>