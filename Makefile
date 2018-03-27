# @Author: Zane Thorn <zanethorn>
# @Date:   2018-03-27T14:16:35-04:00
# @Project: d20-fluent
# @Filename: Makefile
# @Last modified by:   zanethorn
# @Last modified time: 2018-03-27T14:19:58-04:00
# @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
# @Copyright: 2018 Zane Thorn


clean:
	@rm -rf ./bin

copy-assets:
	@mkdir -p ./bin/assets
	@cp -r ./src/assets/* ./bin/assets

build: copy-assets
	@tsc

run:
	@npm start
