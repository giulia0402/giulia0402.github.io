---
layout: home
title: Analysis of fictional worlds through movie summaries
subtitle: Providing an analysis of fictionnal movies through time
cover-img: /assets/img/scene-voie-lactee-dans-ia-generative-snowscape.jpg
share-img: /assets/img/scene-voie-lactee-dans-ia-generative-snowscape.jpg
---

## Abstract

From mythology to science fiction, human beings have always invented and told stories. In the last century, cinematography has become one of the most prominent forms of storytelling, with content ranging from real world documentaries to highly imaginative tales. 

All types of fiction invite their audience to explore real ideas, issues, or possibilities using an imaginary setting or using something similar to reality, though still distinct from it. In this project, we want to extract movies that fall in the category "speculative fiction" as defined in Wikipedia [1], to distill the content of people's imaginations and their evolution over time. Were robots and android topics more popular before technological advances make them less fictional? Were there more aliens and space movies when occurred the first space missions? Those are questions we will try to answer in this Data story.

## Fictional movies

#### A bag of fictional movies
Goal: To get a subset of fictional movies and their summaries.
The main information we get to classify movies as fictional and non-fictional is their genres given by the CMU dataset. Let’s have a look at the genre’s distribution. 
In the CMU dataset, movies can be associated with several genres in particular order of importance: there are more than 300 hundred different genres! The graphs bellow display the proportion of movies taken in account by selecting only a given number of genres. 

Ones can see that the 40 most represented genres cover more than 98,37% of the whole movie dataset. (à verifier !)
Among these 40 selected genres, science fiction and fantasy were chosen as the only ones clearly associated with fiction.
This gives us a first subset of 5366 fictional movies corresponding to 6.56% of the whole movies.
But wait, is this subset representative of all the fiction pieces released during the last 100 years?
Several bias can be highlighted. First, our subset depends on the classification people made for movies genres. Do we miss many fictional movies by selecting only SF and Fantasy movies? Aren’t there others minor fictional genres? Aren’t there hidden fictional movies, only classified for example as drama or action?
To try to mitigate these biases, we also use the IMDB genres classification. We select all the movies classified as SF and Fantasy and merged them with the CMU dataset. In this way a larger part of the CMU movies is integrated in our fictional movies’ subset: it now contains all movies classified as SF and Fantasy by both CMU and IMDB.  

![Genres_distribution](/assets/img/Genres_distribution.png)


#### Fictional worlds but from which part of the world?

We want to capture people's imagination through fiction, but which of people's imagination are we trying to decode? The graph below shows where the movies of our fiction subset have been produced. The proportion that this represents of all films produced in each country is also displayed. 


Our dataset only rounds a small fraction of the films released, which must not be representative of the real bunch of films distributed each year in the world. Even if this is the case, American films will still have a greater weight in our study than films from any other country.

#### Time dimension
Our main object of study is to analyze the evolution of fictional worlds over time. Therefore, our fictional movies dataset must contain enough films released over the entire study period. Below, is the number of fictional films released each year and the proportion of the total number of releases that they represent.


![avg_topics](/assets/img/Topic_avg.png)


## Detecting Fictional topics
To detect fictional topics, we used a Latent Dirichlet allocation (LDA) on movie summaries 

### Topic modeling on the fictional subset
In LDA method summaries are  bags of words and each topic is a probability distribution over words.
Several manipulations were performed on the summaries in order to optimize the topic detection by keeping the words that carry the most information.
* Word normalization with lemmatization to gather words with close meanings
* Stop words removal   
* Proper nouns removal but keeping locations, events, dates
* Non weighted words (ie : A word that appears many times in a summary won’t have a bigger weight than one which just appears one time.)
  
This gives us a preprocessed substed of fictional summaries. 

Two LDA parameters have been adjusted to consider a  low number of topics per document and a low number of words per topic. 

A bias research ?
* Number of releases : As we saw before our subset is mainly composed of recent movies that can prevent
  
* Summaries length : Summaries with a lot of words will give more weight to minor topics that may be not relevant for our study. The graph below shows the average number of words in preprocessed summaries over time . After 1950, the mean number of words in the preprocessed summaries is more stable with a slight increase and variation of around 30 words. 

After 1950, the mean number of words in the preprocessed summaries is more stable with a slight increase and variation of around 30 words. This is good news because it means that by performing a topic modeling on each decade after 1950, the results won't be biased by the number of words per summaries.

![Average preprocessed sumaries length](/assets/img/Genres_distribution.png)

<html>
<head>
  <style>
    table {
      font-family: Arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }


    th, td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }


    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>


<h2>Themes</h2>


<table>
  <tr>
    <th>Category</th>
    <th>Related Keywords</th>
  </tr>
  <tr>
    <td>Outer Space</td>
    <td>alien, UFO, extraterrestrial, space, spaceship, outerspace</td>
  </tr>
  <tr>
    <td>Science</td>
    <td>scientist, science, researcher, research, experiment, experimentation, laboratory</td>
  </tr>
  <tr>
    <td>Government</td>
    <td>government, society, politics, regime, council</td>
  </tr>
  <tr>
    <td>Creatures</td>
    <td>creatures, monsters, vampires</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>robot, droid, cyborg</td>
  </tr>
  <tr>
    <td>Digital</td>
    <td>computer, artificial intelligence, cyber, virtual reality, cyberspace, programmer, hacking, digital</td>
  </tr>
  <tr>
    <td>Magic</td>
    <td>magic, sorcerer, wizard, witchcraft, spell, enchantment, sorcery, witch, mage, mystical</td>
  </tr>
  <tr>
    <td>War</td>
    <td>war, battle, conflict, combat, military, army, warfare, soldier</td>
  </tr>
  <tr>
    <td>Time Travel</td>
    <td>time travel, travel time, temporal displacement, time dilation, time machine, temporal journey, time loop, time manipulation, temporal paradox, time warp</td>
  </tr>
  <tr>
    <td>Apocalypse</td>
    <td>apocalypse, doomsday, end world, world end, armageddon, post-apocalyptic, apocalyptic, cataclysm, world destruction, human extinction, mass extinction, end of civilization</td>
  </tr>
</table>


</body>
</html>



