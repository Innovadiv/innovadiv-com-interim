# Innovadiv.com (interim website)
A temporary site to host until the real product is launched.

## Browser Compatibility
- Internet Explorer 10+
- Chrome (last 5 versions)
- Firefox (last 5 versions)
- iOS 6+ Safari 
- OS X Safari 6+
- Android Chrome (last 5 versions)

## Technical Stack
- JavaScript (ECMA 5) / Node (0.1.x) http://nodejs.org/
- Express 4.x http://expressjs.com/
- MongoDB http://www.mongodb.org/ and Node connector https://github.com/mongodb/node-mongodb-native
- AngularJS 1.3.x https://angularjs.org/
- Twitter Bootstrap http://getbootstrap.com/
- AngularJS Bootstrap bridge http://angular-ui.github.io/bootstrap/
- SCSS http://sass-lang.com/
- Dependency Managers
 - NPM (Back-end) https://www.npmjs.com/
 - Bower (Front-end) http://bower.io/

## Environment Setup
- Install VirtualBox 4.3+ https://www.virtualbox.org/
- Install Vagrant 1.7+ https://www.vagrantup.com/
- run `vagrant up`
- `vagrant ssh`
- `cd /vagrant && sudo fig run --rm app npm install && sudo fig run --rm bower bower install --allow-root`

#### Starting/Restarting application
- `vagrant ssh`
- `cd /vagrant && sudo fig up -d`

#### Log Tailing the Application
- `vagrant ssh`
- `cd /vagrant && sudo fig up -d && sudo fig logs app`

#### Rebuilding Docker Image
- `vagrant ssh`
- `cd /vagrant`
- `sudo fig build app`
- `sudo fig up -d`

#### Updating Dependencies from Node and Bower
- `vagrant ssh`
- `cd /vagrant && sudo fig run --rm app npm install && sudo fig run --rm bower bower install --allow-root`

## Integrations
- MailChimp Node bridge https://github.com/gomfunkel/node-mailchimp

## Styleguide
- HTML/CSS/SCSS http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
- JavaSCript http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml

## Deployment
- A webhook is attached to this repository, any code pushed to `master` automatically builds http://innovadiv.com/ (only valid until end-of-life of this repository).

## Contributors
- [@mattlo](https://twitter.com/Matt_Lo)

## License
View the [LICENSE](https://github.com/innovadiv/innovadiv-com-interim/blob/master/LICENSE) file.