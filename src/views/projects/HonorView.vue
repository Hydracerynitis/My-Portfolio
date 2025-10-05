<script setup>
import paragraph from '/src/components/paragraph.vue';
</script>

<template>
    <paragraph imageName="machineBias" title="Biased Behaviour in Machine Learning Models" subtitle="Problem Context">
        <p class="mt-3">Machine learning models were once believed to make unbiased decisions for unseen individuals by 
            relying on statistical information extracted in historical data. </p>
        <p class="mt-3">As a result, they have been widely employed in critical decision-making areas such as job 
            recruitment, loan approval, credit risk assessment, and the judicial system; all under the assumption that 
            they could help create a fairer environment for future applicants.</p>
        <p class="mt-3">However, <a class="btn-style-primary"
            href="https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing">
            ProPublica</a> had found evidence that Machine Learning models are able to exhibit biased behaviours. In their 
            investigation of COMPAS, a tool used by US judge to assess defendants' risk of reoffense, they found that COMPAS 
            is more likely overestimate black defants' risk, while underestimating white defendants' risk</p>
    </paragraph>
    <paragraph imageName="FairnessML" title="Fairness ML, and sensitive attributes" subtitle="Research Field Context"
            :imageRight="true">
        <p class="mt-3">Fairness Machine Learning is an emerging research field that positions itself to solve the Problem 
            of biased models. At the time of my project, there is already a substantial scene from the research field. For 
            example, AI Fairness 360 and Aequitas are well-developed tools that aggregate relevant research outputs from 
            the field and offer easy access to practitioners.</p>
        <p class="mt-3">Across most Fairness Machine Learning research, there exists an underlying presumption: the bias we
            want to mitigate is well known to us, and the social groups that the bias marginalises can be easily separated from
            the whole populations based on the values of sensitive attributes such as race, gender or age. As a result, 
            there is a lack of research on how to mitigate bias that we have yet known.</p>
    </paragraph>
    <paragraph imageName="ssr_example" title="Sensitive SBC Framework" subtitle="Bias Mitigation Without Sensitie Attribute"
        :imageSize="6">
        <p class="mt-3">My research propose a new framework called Sensitive SBC to study bias without identifying the 
            sensitive attributes that partitions the datasets. Sensiive SBC consists of <b>Slice</b>
            , <b>Box</b>, and <b>Complex</b>, each representing marginalised
            population within the data space with different levels of specificity.</p>
        <p class="mt-3"><b>Slice</b> represent an interval alongside the dimension of a single data feature. It is similar
             to how sensitive attribute separate marginalised groups and can be a replacement of them.</p>
        <p class="mt-3"><b>Box</b> is a combination of multiple <b>Slices</b>,
            aims to describes marginalised populations as conjunctions of mutliple numerical measurements.</p>
        <p class="mt-3"><b>Complex</b> is a combination of multiple <b>Boxes</b>
            that cover a more complex area within the dataspace. It can also be disconnected as illustrated in the left graph.</p>
    </paragraph>
    <paragraph imageName="metabase" title="How to measure bias that we have yet to know?" subtitle="Research Experiement Setup"
            :imageRight="true" :imageSize="6">
        <p class="mt-3">Research had found that models' biased behaviours can be traced back to several data pattarns of their
            training datasets, such as unbalanced sampling and incomplete data features. Thus we believe we can study the presence
            of data pattern of well known bias to predict whether our future datasets have bias pattern of 
            unknown bias.</p>
        <p class="mt-3">In order to test our theory, we set up our experiments as follows:</p>
        <p class="ms-4"><b>1.</b> We first curate our collection of biased dataset. Since there are not enough real-world biased
            datasets to suport our experiments, we choost to artificially generate biased datasets. The configuration used to
            generate individual datasets are also recorded.</p>
        <p class="ms-4"><b>2.</b> We then measure meta-features of our curated datasets, including their mutual information,
            complexity and how decision trees and decision stumps interact with them. We also apply our sensitive SBC Framework
            to them and calculate their bias metrics, which are modified to measure biased pattern in datasets.</p>
        <p class="ms-4"><b>3.</b> At last, we train machine learning models using meta-features extracted in previous step to make
            them predict datasets' bias metrics. We have considered well-performed models such as <b>Random Forest</b>, 
            <b>LightGBM</b>, <b>XGBoost</b> and <b>Multi-Layed-Perception</b>.
            We also tested using ensembles of individual models or chaining them one-by-one to enhance their accuracy</p>
    </paragraph>
    <paragraph imageName="honor_result" title="Performance of Meta-Learning Models" subtitle="Research Result">
        <p class="mt-3">Among all meta-learning models we trained, we found that <b>LightGBM</b>
            is the most accurate and computation-efficient model on both classification (is this dataset biased?) and regression
            (how much biased datasets are) tasks.</p>
        <p class="mt-3">As ilustrated in the graph, all meta-learning models are capable of matching our knowledge of bias in 
            real-world datasets. However, their performance are not stable across all datasets or all bias metrics. Improving our
            meta-learning models, or introducing deep learning models will be the future work of this research.</p>
        <p class="mt-3">For more details regarding our honor research project, you can check our jounrals placed in below.</p>
        <router-link to="/honorJournal.pdf" target="_blank" class="btn btn-style mt-3">View Research Journal</router-link>
    </paragraph>
</template>