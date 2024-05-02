Installs media server and license free content to demonstrate packet flows for demos

To install on a working Ubuntu system

sudo apt-get update
sudo apt-get install lighttpd git -y
cd /var/www/html
sudo mv index.lighttpd.html /home/labuser/index.lighttpd.html
sudo git clone https://github.com/phydeaxarf/mediaserver.git .  (trailing period is required to have git install in /var/www/html)
