# milestone-project-2
# Pawcation
Please click on link to see my full working webpage for [Pawcation](https://martinmaguire89.github.io/milestone-project-2/).

My second milestone project is webpage with .
## UX
### Who is the target audience?
*	A person who plays hurling.
*	Local clubs interested in buying handmade stick for their players.
*	People looking for authentic handmade hurley stick and other wooden plaques or keyrings. 
### How does this attract our target audience?
The user gets a brief outline about the maker of their hurls, what they are made out of and what items are available to order.  They then get access to a gallery of work completed and the range and types of hurls, plaques and helmet making and repairs. This allows them to see the quality of the craftmanship.  A brief video of the history of hurley making to show how this historic art is crafted and more about the man creating them and his passion for it.
There is a contact form at the bottom of the page for the customer to make contact for further questions and potential orders. The social media links allows the customer to follow and see more up to date goings on with the hurley maker.
## User Stories
*	As a user, I want to know if these are authentic handmade hurls.
*	As a user, I want to know what wood is used.
*	As a user, I want to see previous work.
*	As a user, I want to be able to make contact easily.
## Wireframe
* link to my [balsamiq wireframe](https://github.com/martinmaguire89/milestone-project-1/blob/master/milestone-project-1-wireframe.pdf)
*	I decided to use Balsamiq to create my wireframe because it was recommended in the milestone project and by code institute mentors on slack.

## Technologies used
* Html
*	CSS
*	[Google Fonts](https://fonts.google.com/) - Used to style the fonts of the website.
*	[jQuery](https://jquery.com/) - To make certain features function on the page.
*	[git](https://github.com/)- Used as a repository
*	[aws educate](https://aws.amazon.com/education/awseducate/)- Used for a development and testing area.
*	[Bootstrap](https://www.bootstrapcdn.com/) - Bootstrap framework to create responsive design and 
*	[fontawesome](https://fontawesome.com/) for social media icons.
## Features
### Feature 1 – Navigation Bar
The navigation bar to take the customers direct to certain features on the website. This collapses into a 'burger icon' dropdown menu in mobile screen sizes to reduce over-crowding and give smaller screen sizes a nicer look.
### Feature 2 – Gallery
Customers can see how previous pieces of work the maker has crafted and range of hurls available. 
### Feature 4 – Embedded Video
Let’s the customer see the history of hurley making and find out more about the maker and his passion for making authentic hand-crafted hurls. 
### Feature 5 – Contact Form
Allows potential customers to ask questions about pieces in the gallery or to start the process of ordering a piece.
### Feature 6 – Social media icons in footer
Allows the customer to connect and follow the craftsman’s other pages.
## Features Left to Implement
* Add a payment feature for sticks available.
* A review section to let people know of other customers experience when buying hurls form this maker.
* Create a section to share information about the art of Stick making and some events that the maker will have coming up at local hurley clubs clubs. 
## Testing
* Used Google Chrome developer tools to test website responsiveness across multiple devices such as Tablets and Mobiles.
* Tested that the nav links worked and took they customer to the desired section of the website. Tests on all device sizes when in ‘burger icon’. 
* Used [W3c validator](https://validator.w3.org/) to validate both HTML and CSS. I copied my code and pasted it into the validator to check for errors and warnings.
* Tested the contact form for the required attribute. With this attribute it will not let you submit the form with the required information. To test this, I tried to send the form without the required information but was not let until all information was given correctly.
* I used [cssautoprefixer](https://autoprefixer.github.io/) to help get the appropriate vendor prefixes needed for my code to work in all browsers. I tested this on Google Chrome, Microsoft Edge and Mozilla.

## Issues when Testing
* On certain screen sizes smaller than a large view all sections where being pushed to the left leaving a long blue column down the right making the page look unappealing of smaller screens. This was due to the YouTube videos no being responsive. I used iframe css to make the videos become more responsive when on smaller screen to the original size of the videos.
* The pictures of the hurls where leaking over into the next container and stretching passed their container when on smaller screen sizes. I used flex classes from bootstrap to allow for a more responsive and flowing change to how many pictures where on each row. This allowed for all picture to stay with their container. 
* When testing on different browser I found the code had not been optimised and used [Autoprefixer](https://autoprefixer.github.io/) to optimize it. I copied and pasted the code and it added the necessary code to fix this.
## Deployment
The website was developed using AWS educate cloud9, it was then committed to git and pushed to GitHub using the terminal in Cloud9.
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:
* Log into GitHub.
* Select the repository martinmaguire89/milestone_project_1.
* At the top of the page, select Settings.
* Scroll down to the GitHub Pages section.
*Under Source, select Master Branch
* The live link for the website will now appear beneath the GitHub Pages header.
* Click the link and a live website will open in a new tab.

### How to run this project locally
If you wish to clone this project from GitHub:
* Click on this [link](https://github.com/martinmaguire89/milestone-project-1/blob/master/milestone-project-1-wireframe.pdf) to the GitHub repository.
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
