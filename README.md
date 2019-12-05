# Milestone-project-2
# Pawcation
Please click on link to see my full working webpage for [Pawcation](https://martinmaguire89.github.io/milestone-project-2/).

My second milestone project is an interactive front-end site. The site allows potential users to interact with the site and search the map for places to stay that are dog friendly. The buttons allow for the user to narrow down their search for specific arrears in Northern Ireland. 

## UX
### Who is the target audience?
*	This website is for people wanting to take a holiday but also bring there pet with them.
*	Holiday makers from the south of ireland and great Britain looking for a posisble city break with their dog.

### How does this attract our target audience?
The user gets a brief outline about what the pawcation website is about, what exactly is shown on the website and what it has to offer. The typography was designed to be fun and eye catching for dog lovers when they visit the site. A single page website makes it easy to navigate to the map to search for their desired destination. The info window is easy for the user to select and the link to the website makes it simple for them to check out the hotel and obtain more info. 
## User Stories
*	As a user, I want the initial page to be eye catching.
*	As a user, I want it to be easy to navigate.
*	As a user, I want to have an easy way to get further information on the hotel and possibly book.
*	As a user, I want an easy contact method if I wish for my establishment to be added to the website. 
## Wireframe
* Link to my [balsamiq wireframe](https://github.com/martinmaguire89/milestone-project-2/blob/master/milestone%20project-2.pdf)
*	I decided to use Balsamiq to create my wireframe because it was recommended in the milestone project and by code institute mentors on slack.

## Technologies used
* Html
*	CSS
*	[Google Fonts](https://fonts.google.com/) - Used to style the fonts of the website.
*	[jQuery](https://jquery.com/) - To make certain features function on the page.
*	[git](https://github.com/)- Used as a repository
*	[Gitpod](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki)- Used for a development and testing area.
*	[Bootstrap](https://www.bootstrapcdn.com/) - Bootstrap framework to create responsive design.
*	[fontawesome](https://fontawesome.com/) for social media icons.
*	[google.maps javascript api](https://developers.google.com/maps/documentation/javascript/tutorial) used to get my api key and render my map onto the webpage. Also used for adding markers and info windows.
*	[email.js](https://www.emailjs.com/) used to connect my contact form with my gmail to be notified when someone sends a request. 

## Features
### Feature 1 – Large dog picture.
The large dog picture is designed to show a fun and welcoming side of the web page. It’s used to provoke the image of their own dog enjoying themselves on holiday with the owner. It show’s them that this is a fun and easy to use website that will serve their needs.
### Feature 2 –  Paragraph section.
The small paragraph is just a few lines to let the customer know what this page is about and how the needs of them and their dogs will be catered for. 
### Feature 4 – Search by counties.
The search by counties allows the user to narrow down the search field on the map. If they are looking to search for dog friendly hotels in a specific county they can simply do that at the click of the button.  
### Feature 5 – The map section.
The maps section allows for a complete look of all potential place to stay with a dog in Northern Ireland.   The markers section allows for them to see where the hotels are and the info window provides them with a link to the hotel for making a booking. 
### Feature 6 – Contact Form.
Allows potential owners of hotel or restaurants to contact me to advise of what they offer for dogs and to have them establishment added to the map.  
### Feature 7 – Social media icons in footer.
Allows the customer to connect and follow me through my social media accounts.

## Features Left to Implement
* I would like to add a page for previous user to leave a review of their recent stay at dog friendly hotels to allow other users to know how they got on staying with there dog. This will improve there decision making when trying to decide where to stay.
* Personalised markers to differentiate between what markers are for places to stay, places to eat where dogs are allowed and both. 
* A further API added to the page to hotel booking site such as Booking.com to allow the user to see the prices of a night’s stay and potentially book rather than having to leave the webpage.  

## Testing
* Used Google Chrome developer tools to test website responsiveness across multiple devices such as Tablets, Mobiles and laptop.this allowed me to see any issue's with sizing in diffenr version control.
*  I used different web browsers such as Microsoft edge and Firefox to test how my page would run on different web browsers. I then used each responsive tools in each browser to again test my version control to see if it would still work effectively or if I would encounter any problems. 
* Used [W3c validator](https://validator.w3.org/) to validate both HTML and CSS. I copied my code and pasted it into the validator to check for errors and warnings.
* I tested each button when adding the JavaScript for each of them. Once one worked, I tested if it was still working on smaller screens and if there were any delay when clicked. Once I sorted this, I used the same JavaScript for each button to change the centre of the map to a specific location when clicked.
* I used [cssautoprefixer](https://autoprefixer.github.io/) to help get the appropriate vendor prefixes needed for my code to work in all browsers.
* Used [W3c validator](https://validator.w3.org/) to validate both HTML and CSS. I copied my code and pasted it into the validator to check for errors and warnings.

## Issues when Testing
* On certain screen sizes smaller than a large view all sections where being pushed to the left leaving a long blue column down the right making the page look unappealing of smaller screens. This was due to the YouTube videos no being responsive. I used iframe css to make the videos become more responsive when on smaller screen to the original size of the videos.
* The pictures of the hurls where leaking over into the next container and stretching passed their container when on smaller screen sizes. I used flex classes from bootstrap to allow for a more responsive and flowing change to how many pictures where on each row. This allowed for all picture to stay with their container. 
* When testing on different browser I found the code had not been optimised and used [Autoprefixer](https://autoprefixer.github.io/) to optimize it. I copied and pasted the code and it added the necessary code to fix this.

## Deployment
The website was developed using Gitpod, it was then committed to git and pushed to GitHub using the terminal in Gitpod.
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:
* Log into GitHub.
* Select the repository martinmaguire89/milestone_project_2.
* At the top of the page, select Settings.
* Scroll down to the GitHub Pages section.
*Under Source, select Master Branch
* The live link for the website will now appear beneath the GitHub Pages header.
* Click the link and a live website will open in a new tab.

### How to run this project locally
If you wish to clone this project from GitHub:
* Click on this [link](https://github.com/martinmaguire89/milestone-project-2) to the GitHub repository.
* There is a green button saying "Clone or download" on the right-hand side, click on this.
* Next copy the clone URL for the repository that is provided.
* Open Git Bash in your local IDE.
* Change the current working directory to the location where you want the cloned directory to be created.
* Type git clone, and then paste the URL copied in Step 3.
git clone https://github.com/USERNAME/REPOSITORY
* Press Enter to create your local clone.

## Credits
### Content
All content on the page was written by me.
### Media
* Footer social icons were taken from the "rosie cv" module and navbar from the whiskey drop project.
* The large logo picture at the top was a stock photo taken from [www.pexels.com](www.pexels.com).
* You Tube videos where taken from [Teagasc](https://www.youtube.com/channel/UCgeZtt-RlB7yh6jDkdv2i8A) and [wide ball page](https://www.youtube.com/channel/UC2EwQtsXBLa5eEc0doaZsLg).
* The gallery photos were taken from a stock provided by Emmet Martin. 
This is for educational use.
