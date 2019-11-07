all: update

update:
	git pull
	sudo systemctl restart node

merge:
	git fetch
	git merge origin/dev
	sudo systemctl restart node
