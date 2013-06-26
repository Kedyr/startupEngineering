module.exports = {
	fs:require('fs'),
	writeToFile:function(filePath,data)
	{
		this.fs.writeFileSync(filePath,data);
	}
}