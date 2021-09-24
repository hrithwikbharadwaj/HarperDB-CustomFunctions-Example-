# HarperDB Custom Functions For my Newsletter WebApp

This repo comprises a set of Fastify routes, helpers, and static content . To read more about this project. Head over to this [tutorial](blog.hrithwik.me/how-i-used-harperdb-custom-functions-to-build-a-web-app-for-my-newsletter) .

If you want to work on this locally and Deploy it to HarperDB Custom Functions , currently the best way to do it is by
Step 1: Convert this entire project into a .tar file
Step 2: Convert the .tar file into a base64 string (use this [website](https://www.base64encode.org/enc/tar/))
Step 3: Make an Post Request to your cloud instance with the request body as follows. Make sure you add your auth header while making a request.

```json
{
  "operation": "deploy_custom_function_project",
  "project": "api",
  "file": "/tmp/144275e9-f428-4765-a905-208ba20702b9.tar",
  "payload": "aGVscGVycy8AAAAAAAAAAAAAAAAAAAAAAA........"
}
```

Here the in the request body, the project of mine is api, the payload will be that long base64 encoded tar file. The file section is dummy but necessary so just copy what I have written.

Step 4: Verify the upload by going to the Functions section in the HarperDB Studio.

You can clone [this](https://github.com/HarperDB/harperdb-custom-functions-template) repo as a starting place.
