<script setup>
import paragraph from '/src/components/paragraph.vue';
</script>

<template>
    <paragraph imageName="ArgusML" title="Argus ML -- Machine Learning Model Creation App" subtitle="Web App Overview"
        imageSize="6">
        <p class="mt-3">This is work of a six-member group assignment from University. This web application provides means
            for users without any knowledge of AI or programming to train machine learning models based on their 
            demands. The webapp handles the entire training, evlatuion and infering processes of the machine learning pipeline
            for the users, while all they required to do is to upload their tabular data.</p>
        <p class="mt-3">The webapp uses a popular tech stacks called <b>MERN</b>. Its frontend client is built with 
            <b>React</b>, <b>ViteJS</b>, <b>TreeJs</b>, <b>D3JS</b> and <b>ChakraUI</b>. Its back end server is based on 
            <b>MongoDB</b>, while <b>ExpressJS</b>, <b>NodeJs</b> and <b>Postman</b> are used to write API that connects
            the frontend client and backend server. We also use <b>Scikit-Learn</b> from <b>Python</b>
            to serve as our major machine learning training library. The frontend client is deployed using <b>Vercel</b> and 
            the backend server is deployed usigng <b>Render</b>.
        </p>
    </paragraph>
    <paragraph imageName="ArgusTeam" title="Team Composition and Communication" subtitle="Our Teamworks"
            :imageRight="true" :imageSize=6>
        <p class="mt-3">Our team consists of <a href="https://github.com/Granicus0">Vinayak Joshi</a>, <a href="https://github.com/ABCCASa">Peter He</a>,
            <a href="https://github.com/SLIU383">Steven Liu</a>, <a href="https://github.com/Alina618">Alina Xu</a>, <a href="https://github.com/leihanZzZ">Leihan Zhang</a> 
            and me. It is seperated into frontend teams and backend teams, with Steven and Alina in frontend team and Peter and me in backend team.
            Vinayak and Leihan are jumping between both teams, helping their current issues as they see fits. In addition, Vinayak is also responsible for
            deploying the web app.
        </p>
        <p class="mt-3">We do not have an active leader. Instead, we settle our team's priority and decision-making through weekly meetings,
            while smaller, more frequent communications are done through a discord server. For example, the premise of the web app 
            is proposed by me in a weekly meeting and the rest of the details are refined by other members during that meeting.
        </p>
    </paragraph>
    <paragraph imageName="ArgusModel" title="The Flow of ArgusML" subtitle="Application Logic">
        <p class="mt-3">The web app is a user oriented. Thus , you need to sign up your account in the website to access
            the core functionality of the website. When users are yet to login in, the website will show awesome animations
            created by Steven, which is made possible by <b>TreeJS</b>.</p>
        <p class="mt-3">The web app provides two funtions: create new Machine Learning models, or using exisitng Machine Learning
            models to make new predictions. When users want to create new Machine Learning models, they needs to select which supported
            Machine Learning models to train and specify their preferred settings of its creation process. Then
            all they need to do is to upload their tabular data and wait for server to process the training. </p>
        <p class="mt-3">After that the binary files of the Machine Learning models and the schema of the uploaded table will
            be stored at the disk system of the server, and the meta-information including the ownership of the new model 
            will be registered in our <b>MongoDB</b> database. </p>
        <p class="mt-3">When users want to use their models for predicitng new data, they need to select their models which
            they have created with other data of the same origin and upload their new table. The server will first validate the uploaded
            table using the schema of old table and then load the trained model to make inference on uploaded data. The output will
            be sent to client which users can then subsequently download.
        </p>
    </paragraph>
    <paragraph imageName="ArgusTrain" title="Running Python inside Javascript Process" subtitle="Greatest Challenge"
            :imageRight="true">
        <p class="mt-3">Since the start of our project, the greatest hurdle that we have to overcome is to manage running 
            a program of different language inside a Javascript based server since Javascript is not fit for training AI models.
            We also need to make the subprogram able to communicate to the Javascript server, so that it can send the results of
            model evaluations back to frontend client.
        </p>
        <p class="mt-3">After several weekly meetings discussing possible solution, Vinayak, Peter and I choose the following solutions:
            whenever the server receive either training or testing requests from the client, the server will start a new Python subprocess
            and run relevant script modules based on the request. While the Python subprocess is running, the server will monitor
            the terminal output of the Python scripts, and show them on random port that the client is checking on. The client
            will then parse information out of them and visualise them for users to understand. If there are multiple concurrent requests,
            Python scripts' output is relayed to different ports to avoid the client from etracting irrelevant information.
        </p>
        <p class="mt-3">For more details regarding this web application, you can check a public copy of our private code repository 
            uploaded by Vinayak.
        </p>
        <a href="https://github.com/Granicus0/project-group-xanthic-xiphosuras-FINAL-DEPLOYMENT" class="btn btn-style mt-3">Link to Repository</a>
    </paragraph>
</template>