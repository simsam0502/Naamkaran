# Naamkaran

![image](https://user-images.githubusercontent.com/73781304/136705843-34826d9c-3816-4bf9-8bf7-2bb4e24d9e97.png)

![image](https://user-images.githubusercontent.com/73781304/136705866-46d443ae-a327-41e4-aa14-89773c3a6af3.png)

## Pre-coding Phase

### Problem Statement
    
Often people find it difficult to come up with an impactful and unique name for their project.

### Solution Idea
    
A project name suggesting app which displays unique project names according to the keywords given. Each name also provides a link to its name cheap domain.

### Thinking
    
Input - Keyword

Processing - Dependency

Output - Project Names

### Designing

https://www.figma.com/file/5xPbDMQZlK0faLNHGUyzEK?embed_host=notion&kind=&node-id=0%3A1&viewer=1
    
@import url('[https://fonts.googleapis.com/css2?family=Charmonman:wght@700&family=Dekko&display=swap](https://fonts.googleapis.com/css2?family=Charmonman:wght@700&family=Dekko&display=swap)');

1. font-family: 'Charmonman', cursive;
2. font-family: 'Dekko', cursive;

Search icon - <i class="fas fa-search"></i>

### Pseudo Code
    
- Breaking down the app into components - Header, SearchBar and Suggestions, Suggestion
- onChange SearchBar callback to App with event.target.value in parameter.
- App passes boolean state prop to Header (searchBarEmpty = keyword.length===0) and renders expand or contract class (only change in direction of animation) using boolean state accordingly.
- App passes keyword to Suggestion Container as a prop if keyword.length>0, get result for the keyword through the dependency and map it to Suggestion Component else set result state array as empty [].

## Coding Phase

### Setting up dev environment
    
npx create-react-app naamkaran

### Coding
    
### Deploying
    
Using gh-pages
