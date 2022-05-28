NAME := $(shell basename $(shell git config --get remote.origin.url) | sed 's/\.git//')
BRANCH := $(shell git symbolic-ref --short HEAD 2>/dev/null)
VERSION := $(shell git log -1 --pretty=format:"%H")
FEVERSION := $(shell date +'%Y%m%d%H%M%S')
TMPDIR=<%=projectName%>
FEDIR=<%=projectName%>-static
RELEASESDIR=releases

default: all

all: pack

test: init
	echo "$(VERSION)" > $(TMPDIR)/VERSION
	echo "$(FEVERSION)" > $(FEDIR)/VERSION

init: clean
	mkdir -p $(TMPDIR)
	mkdir -p $(FEDIR)
pack: init
	echo "$(VERSION)" > $(TMPDIR)/VERSION
	echo "$(FEVERSION)" > $(FEDIR)/VERSION

	sh online.sh


	(cd server && cp -r bin dist node_modules package.json ../$(TMPDIR))
	(cd client && cp -R ./dist/*  ../$(TMPDIR)/dist/statics)

	mkdir -p $(RELEASESDIR)
	tar czf $(RELEASESDIR)/$(TMPDIR).tar.gz $(TMPDIR)/
	tar czf $(RELEASESDIR)/$(FEDIR).tar.gz $(FEDIR)/

clean:
	rm -rf $(TMPDIR)
	rm -rf $(FEDIR)
	rm -rf $(RELEASESDIR)

.DEFAULT: all
