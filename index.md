---
layout: home
title: How much people like fantastic movies
subtitle: Providing an analysis of fictionnal movies through time
cover-img: /assets/img/scene-voie-lactee-dans-ia-generative-snowscape.jpg
share-img: /assets/img/scene-voie-lactee-dans-ia-generative-snowscape.jpg
---

## Abstract

From mythology to science fiction, people have always invented stories. The ability to create fiction (defined by the American Heritage Dictionary as creative work whose content is imagined and is not based on real facts) can even be viewed as characteristic of the human race. All types of fiction invite their audience to explore real ideas, issues, or possibilities using an imaginary setting or using something similar to reality, though still distinct from it. In this project, we want to extract movies that fall in the category "speculative fiction" as defined in Wikipedia [1], to distill the content of people's imaginations and their evolution over time.

With the CMU movie summary corpus as the starting point, the first step is to get a subset of summaries representative of speculative fictional summaries. We approach this first step in two ways: we directly search for the genre of the movies related to speculative fiction in the dataset and hope to improve and extend the classification by training a Naive Bayes model. Once we have the dataset of fictional summaries, we will perform sentimental analysis to study how positive the stories are. To find out what the stories are about, we implement topic modeling with a Latent Dirichlet allocation (LDA) model to identify themes among them.

## Fictional movies

#### A bag of fictional movies
Goal: To get a subset of fictional movies and their summaries.
The main information we get to classified movies as fictional and non-fictional is their genres given by the CMU dataset. Let’s have a look at the genre’s distribution. 
In the CMU dataset, movies can be associated with several genres in particular order of importance. There are more than 300 hundred different genres. The graphs bellow shows the proportion of movies taken in account by selecting only a given number of genres. 

Ones can see that the 40 most represented genres cover more than 98,37% of the whole movie dataset. (à verifier !)
Among these 40 selected genres, science fiction and fantasy were chosen as the only ones clearly associated with fiction.
This gives us a first subset of 5366 fictional movies corresponding to 6.56% of the whole movies
But wait, is this subset representative of all the fiction pieces released during the last 100 years?
Several bias can be highlighted. First, our subset depends on the classification people made for movies genres. Then, do we miss many fictional movies by selecting only SF and Fantasy movies? Aren’t there others minor fictional genres? Aren’t there hidden fictional movies, only classified for example as drama or action?
To try to mitigate these biases, we use the IMDB genres classification. We select all the movies classified as SF and Fantasy and merged them with the CMU dataset. In this way a larger part of the CMU movies is integrated in our fictional movies’ subset. It now contains all movies classified as SF and Fantasy by both CMU and IMDB.  

![Genres_distribution](/assets/img/Genres_distribution.png)


#### Fictional worlds but from which part of the world?
We want to capture people's imagination through fiction. But which people imagination are we trying to decode? The graph below shows where the movies of our fiction subset have been produced. the proportion that this represents of all films produced in each country is also displayed. 


Our dataset only rounds a small fraction of the films released, which must not be representative of the real bunch of films distributed each year in the world. Even if this is the case, American films will still have a greater weight in our study than films from any other country.

#### Time dimension
Our main object of study is to analyze the evolution of fictional worlds over time. Therefore, our fictional movies dataset must contain enough films released over the entire study period. Below is the number of fictional films released each year and the proportion of the total number of releases that they represent.





