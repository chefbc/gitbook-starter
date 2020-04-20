---
title: "SSH Snippets"
metaTitle: "Snippets for SSH"
metaDescription: "SSH related code snippets"
---


## Manage SSH-keys with the SSH-agent

List the ssh-keys currently available in the ssh-agent
```bash
ssh-add -l
```

Add the ssh-key to the ssh-agent
```bash
ssh-add -K ~/.ssh/id_rsa
```
