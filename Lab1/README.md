# Usage

Zum anlegen der ressourcen muss die Azure CLI verwendet werden. Hierzu muss ich zuerst angemeldet werden:

```bash
az login
```

Danach muss eine ressource group erstellt werden:

```bash
az group create --name <RESSOURCE_GROUP_NAME> --location westeurope
```

Jetzt können die ressourcen angelegt werden:

```bash
az deployment group create --resource-group <RESSOURCE_GROUP_NAME> --template-file azuredeploy.json --parameters @azuredeploy.parameters.json 
```

Wenn die ressourcen nicht mehr benötigt werden kann die ganze ressource group gelöscht werden durch:

```bash
az group delete --name <RESSOURCE_GROUP_NAME>
```