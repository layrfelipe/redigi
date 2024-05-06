# ReDigi - Protocolo para Fracionamento de NFTs de Utilidade

## Visão Geral:
O ReDigi é um protocolo desenvolvido para facilitar o fracionamento e reintegração de ativos não fungíveis (NFTs) de utilidade, permitindo a divisão da propriedade desses ativos em partes menores representadas por tokens fungíveis (ERC20) e sua posterior reintegração. Este repositório contém a implementação do Protocolo ReDigi, incluindo os contratos na pasta `hardhat` e o frontend na pasta `nextjs`.

## Estrutura do Repositório:
- **hardhat**: Contém os contratos inteligentes do Protocolo ReDigi desenvolvidos na plataforma Hardhat.
- **nextjs**: Contém o frontend do Protocolo ReDigi desenvolvido utilizando Next.js.

## Instruções de Uso:

### 1. Configuração do Ambiente de Desenvolvimento:
   - Certifique-se de ter o Node.js e o npm instalados em sua máquina.
   - Instale o Hardhat e as dependências do projeto executando o comando `yarn install` na pasta `hardhat`.
   - Instale as dependências do frontend executando o comando `npm install` na pasta `nextjs`.

### 2. Teste dos Contratos Inteligentes:
   - Execute o comando `yarn hardhat test --network hardhat` na pasta `hardhat` para testar  os contratos.

### 3. Deploy dos Contratos Inteligentes:
   - Configure sua rede de destino no arquivo `hardhat.config.js`.
   - Execute o comando `yarn deploy --network <nome_da_rede>` para realizar o deploy dos contratos.

### 4. Execução do Frontend:
   - Execute o comando `npm run dev` na pasta `nextjs` para iniciar o servidor de desenvolvimento do frontend.

### 5. Utilização do Protocolo ReDigi:
   - Acesse o frontend através do navegador para interagir com o Protocolo ReDigi.
   - O frontend ainda em desenvolvimento, oferece uma interface amigável para depositar NFTs, criar tokens ERC20 correspondentes e interagir com as funcionalidades do protocolo.

## Autores:
- [Wlad Mendes](https://github.com/wmendes)
- [Layr Felipe](https://github.com/layrfelipe)