## git 规则

* git远程库一般包含master和dev两个分支；
* 从远程库拉取到相应代码后需要在本地创建dev分支；
* 日常开发在dev分支上进行，需求迭代时提交至远程库dev分支，发布前提交至master分支，并且需要根据每次需求文档的id编号，对提交内容打标；
* 修复bug时，在本地创建issue+id的分支，修复完成后，合并至本地master分支并删除新创建的分支，然后推送至远程库master分支，并进行打标；
* 代码提交至远程库（master/dev）分支前，需要git pull拉取远程库最新版本，详情内有对应的冲突解决方案
* 合并分支时不建议使用git merge dev（会丢失分支合并的状态），建议使用git merge --no-ff -m "merge with no-ff" dev
* 本地分支和远程库同步建议：
	* master分支是主分支，因此要时刻与远程同步；	
	* dev分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；	
	* bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；	
	* feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发