// ==============================
    // OBTER DATA E HORA ATUAIS
    // ==============================

    function obterDataHoraAtual() {
        const now = new Date();
        const data = now.toLocaleDateString('pt-BR');
        const hora = now.toLocaleTimeString('pt-BR');
        return ` ${data} ${hora}`;
    }

    // ==============================
    // ETAPA 1: PREENCHER QUESTÕES E NOME DO FORMULÁRIO
    // ==============================

    // Variável para a sigla do cliente
let siglaCliente = "ABC";  // Substitua "ABC" pela sigla real que deseja usar

    
    // Lista de questões do chatbot da FCFS (sem a questão extra)
	const questoes = [
            {
                "name_text": "campeonatos_calendario",
                "msg_type": "Lista de opções",
                "desc_text": "Escolha uma opção:\n1️⃣ Calendário 2025\n2️⃣ Categorias de Base",
                "opcoes": [
                    { key: "1", value: "Calendário 2025" },
                    { key: "2", value: "Categorias de Base" }
                ]
            },        
        {
            "name_text": "boas_vindas",
            "msg_type": "Texto",
            "desc_text": "Olá! 👋 Bem-vindo ao atendimento da Federação Catarinense de Futsal (FCFS)...",
            "goto_question": "",
            "order_int": 10,
            "type": "Texto"
        },
        {
            "name_text": "campeonatos_calendario",
            "msg_type": "Texto",
            "desc_text": "Você escolheu Campeonatos e Calendário. ⚽\n\nEscolha:\n1️⃣ Calendário GERAL de 2025...",
            "goto_question": "",
            "order_int": 20,
            "type": "Texto"
        },
        {
            "name_text": "inscricoes_transferencias",
            "msg_type": "Texto",
            "desc_text": "Você escolheu Inscrições e Transferências de Atletas. 📝\n\nEscolha:\n1️⃣ Como inscrever um atleta/uma equipe...",
            "goto_question": "",
            "order_int": 30,
            "type": "Texto"
        }
    ];
    // Questão extra fixa
    const questaoExtra = { name_text: "questao_extra", msg_type: "Texto", desc_text: "Esta é uma questão extra para evitar problemas.", goto_question: "", order_int: 40, type: "Texto" };

// Função para preencher o nome do formulário
function preencherNomeFormulario() {
    const nomeFormulario = document.querySelector('input[name="name_text"]');
    if (nomeFormulario) {
        const now = new Date();
        const data = now.toISOString().slice(0, 10); // Formato 'aaaa-mm-dd'
        const hora = now.toTimeString().slice(0, 5); // Formato 'hh:mm'

        nomeFormulario.value = `${siglaCliente}_${data}_${hora}`;
        nomeFormulario.dispatchEvent(new Event('input', { bubbles: true }));
        console.log(`✅ Nome do formulário preenchido com '${siglaCliente}_${data}_${hora}'!`);
    } else {
        console.error("❌ Campo de nome do formulário não encontrado!");
    }
}


// Função para adicionar opções quando a questão for "Lista de opções" (apenas cria os campos)
async function adicionarOpcoesLista(indexQuestao, questao) {
    if (questao.msg_type !== "Lista de opções" || !questao.opcoes || questao.opcoes.length === 0) return;

    console.log(`📌 Criando opções para a questão ${indexQuestao + 1}...`);

    for (let i = 0; i < questao.opcoes.length; i++) {
        await adicionarFormOption(indexQuestao);
        await new Promise(resolve => setTimeout(resolve, 500)); // Pequeno delay para renderização
    }
}

// Função para preencher as opções (depois que todas foram criadas)
async function preencherOpcoesLista(indexQuestao, questao) {
    if (questao.msg_type !== "Lista de opções" || !questao.opcoes || questao.opcoes.length === 0) return;

    console.log(`✏️ Preenchendo opções para a questão ${indexQuestao + 1}...`);
    
    // Aguarda tempo extra para garantir que os campos foram renderizados
    await new Promise(resolve => setTimeout(resolve, 2000));

    let todasOpcoes = document.querySelectorAll(`input[name^="questions-${indexQuestao}-options-"][name$="-key"]`);
    let todasOpcoesValue = document.querySelectorAll(`input[name^="questions-${indexQuestao}-options-"][name$="-value"]`);

    if (todasOpcoes.length < questao.opcoes.length || todasOpcoesValue.length < questao.opcoes.length) {
        console.warn(`⚠️ Nem todas as opções foram renderizadas corretamente. Tentando novamente...`);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Espera mais 2s
        todasOpcoes = document.querySelectorAll(`input[name^="questions-${indexQuestao}-options-"][name$="-key"]`);
        todasOpcoesValue = document.querySelectorAll(`input[name^="questions-${indexQuestao}-options-"][name$="-value"]`);
    }

    for (let j = 0; j < questao.opcoes.length; j++) {
        if (todasOpcoes[j] && todasOpcoesValue[j]) {
            todasOpcoes[j].value = questao.opcoes[j].key;
            todasOpcoes[j].dispatchEvent(new Event('input', { bubbles: true }));

            todasOpcoesValue[j].value = questao.opcoes[j].value;
            todasOpcoesValue[j].dispatchEvent(new Event('input', { bubbles: true }));

            console.log(`✅ Opção ${j + 1} preenchida na questão ${indexQuestao + 1}: ${questao.opcoes[j].key} - ${questao.opcoes[j].value}`);
        } else {
            console.error(`❌ Erro ao preencher opção ${j + 1} na questão ${indexQuestao + 1}`);
        }
    }
}

// Função auxiliar para adicionar uma nova opção dentro de uma questão
async function adicionarFormOption(indexQuestao) {
    return new Promise((resolve, reject) => {
        let botoesAdicionar = document.querySelectorAll('.add-handler.djn-add-handler.djn-model-forms-formquestionoption');

        if (botoesAdicionar.length > indexQuestao) {
            console.log(`➕ Adicionando opção à questão ${indexQuestao + 1}...`);
            botoesAdicionar[indexQuestao].click();

            setTimeout(() => {
                console.log(`✅ Opção adicionada à questão ${indexQuestao + 1}`);
                resolve();
            }, 1000);
        } else {
            console.error(`❌ Botão de adicionar opção não encontrado para a questão ${indexQuestao + 1}`);
            reject();
        }
    });
}





// Função para preencher o campo de timeout
function preencherTimeout() {
    const responseTimeout = document.querySelector('input[name="response_timeout"]');
    if (responseTimeout) {
        responseTimeout.value = "1:00:00";
        responseTimeout.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("✅ Campo 'response_timeout' preenchido com '1:00:00'!");
    } else {
        console.error("❌ Campo 'response_timeout' não encontrado!");
    }
}


// Função para preencher o campo "Owner"
function preencherOwner() {
    const owner = document.querySelector('select[name="owner"]');
    if (owner) {
        for (let i = 0; i < owner.options.length; i++) {
            if (owner.options[i].text === "admin-ale") {
                owner.selectedIndex = i;
                owner.dispatchEvent(new Event('change', { bubbles: true }));
                console.log("✅ Campo 'Owner' preenchido com 'admin-ale'!");
                return;
            }
        }
        console.error("❌ Opção 'admin-ale' não encontrada!");
    } else {
        console.error("❌ Campo 'Owner' não encontrado!");
    }
}



// Função para preencher o campo "Msg timeout"
function preencherMsgTimeout() {
    const msgTimeout = document.querySelector('textarea[name="msg_timeout"]');
    if (msgTimeout) {
        msgTimeout.value = "Timeout!";
        msgTimeout.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("✅ Campo 'Msg timeout' preenchido com 'Timeout!'");
    } else {
        console.error("❌ Campo 'Msg timeout' não encontrado!");
    }
}

    // Função para preencher o campo "End cmd text"
function preencherEndCmdText() {
    const endCmdText = document.querySelector('input[name="end_cmd_text"]');
    if (endCmdText) {
        endCmdText.value = "#cancelar";
        endCmdText.dispatchEvent(new Event('input', { bubbles: true }));
        console.log("✅ Campo 'End cmd text' preenchido com '#cancelar'!");
    } else {
        console.error("❌ Campo 'End cmd text' não encontrado!");
    }
}


// Função para preencher o campo "Start cmd text"
function preencherStartCmdText() {
    const startCmdText = document.querySelector('input[name="start_cmd_text"]');
    if (startCmdText) {
        const now = new Date();
        const data = now.toISOString().slice(0, 10); // Formato 'aaaa-mm-dd'
        const hora = now.toTimeString().slice(0, 5).replace(':', ':'); // Formato 'hh:mm'

        startCmdText.value = `#${siglaCliente}_${data}_${hora}`;
        startCmdText.dispatchEvent(new Event('input', { bubbles: true }));
        console.log(`✅ Campo 'Start cmd text' preenchido com '#${siglaCliente}_${data}_${hora}'!`);
    } else {
        console.error("❌ Campo 'Start cmd text' não encontrado!");
    }
}



    // Função para preencher o campo "Number group"
    function preencherNumberGroup() {
        const numberGroup = document.querySelector('select[name="number_group"]');
        if (numberGroup) {
            numberGroup.value = "1";  // Valor correspondente a "ZAP_Padrão (Ale/JS-API)"
            numberGroup.dispatchEvent(new Event('change', { bubbles: true }));
            console.log("✅ Campo 'Number group' preenchido com 'ZAP_Padrão (Ale/JS-API)'!");
        } else {
            console.error("❌ Campo 'Number group' não encontrado!");
        }
    }


    // Função para preencher uma questão
    function preencherQuestao(index, questao) {
        let todasQuestoes = document.querySelectorAll('input[name^="questions-"][name$="-name_text"]');

        if (todasQuestoes.length > index) {
            console.log(`✏️ Preenchendo questão ${index + 1}`);

            todasQuestoes[index].value = questao.name_text;
            todasQuestoes[index].dispatchEvent(new Event('input', { bubbles: true }));

            let msgType = document.querySelectorAll('select[name^="questions-"][name$="-msg_type"]');
            if (msgType[index]) msgType[index].value = questao.msg_type;

            let descText = document.querySelectorAll('textarea[name^="questions-"][name$="-desc_text"]');
            if (descText[index]) descText[index].value = questao.desc_text;

            let orderInt = document.querySelectorAll('input[name^="questions-"][name$="-order_int"]');
            if (orderInt[index]) orderInt[index].value = questao.order_int;

            console.log(`✔️ Questão ${index + 1} preenchida`);
        } else {
            console.error(`❌ Questão ${index + 1} não encontrada.`);
        }
    }

    // Função para adicionar uma nova questão
    function adicionarNovaQuestao(index, questao) {
        return new Promise((resolve, reject) => {
            let botaoAdicionar = document.querySelector('.add-handler.djn-add-handler.djn-model-forms-formquestion');

            if (botaoAdicionar) {
                botaoAdicionar.click();
                console.log(`🆕 Adicionando nova questão ${index + 1}...`);

                setTimeout(() => {
                    preencherQuestao(index, questao);
                    resolve();
                }, 1000);
            } else {
                console.error("❌ Botão de adicionar questão não encontrado!");
                reject();
            }
        });
    }

    // Função principal para preencher todas as questões e o nome do formulário
    async function preencherChatbot() {
        console.log("▶️ Preenchendo nome do formulário...");
        preencherNomeFormulario();

        console.log("▶️ Preenchendo questões...");
        preencherQuestao(0, questoes[0]);

        for (let i = 1; i < questoes.length; i++) {
            await adicionarNovaQuestao(i, questoes[i]);
        }

        // Adiciona a questão extra automaticamente
        let todasQuestoes = document.querySelectorAll('input[name^="questions-"][name$="-name_text"]');
        await adicionarNovaQuestao(todasQuestoes.length, questaoExtra);

        console.log("✅ Todas as questões foram preenchidas!");
    }

    // ==============================
    // ETAPA 2: ADICIONAR 3 OPÇÕES POR QUESTÃO
    // ==============================

    async function adicionarFormOption(index) {
        return new Promise((resolve, reject) => {
            let botoesAdicionar = document.querySelectorAll('.add-handler.djn-add-handler.djn-model-forms-formquestionoption');

            if (botoesAdicionar.length > index) {
                console.log(`🟢 Clicando no botão de adicionar opção para a questão ${index + 1}...`);
                botoesAdicionar[index].click();

                setTimeout(() => {
                    console.log(`✅ Opção adicionada para a questão ${index + 1}`);
                    resolve();
                }, 1000);
            } else {
                console.error(`❌ Botão de adicionar opção não encontrado para a questão ${index + 1}`);
                reject();
            }
        });
    }

    // Função para adicionar 3 opções a todas as questões
    async function adicionarTodasFormOptions() {
        console.log("▶️ Adicionando 3 opções para cada questão...");

        let todasQuestoes = document.querySelectorAll('input[name^="questions-"][name$="-name_text"]');

        for (let i = 0; i < todasQuestoes.length; i++) {
            console.log(`📌 Adicionando opções na questão ${i + 1}...`);

            for (let j = 0; j < 3; j++) {  // Adicionando 3 opções para cada questão
                console.log(`➕ Adicionando opção ${j + 1} na questão ${i + 1}...`);
                await adicionarFormOption(i);
            }
        }

        console.log("✅ Todas as questões receberam 3 opções cada!");
    }

    // ==============================
    // ETAPA 3: PREENCHER OPÇÕES
    // ==============================

// Função para preencher as opções de uma questão
async function preencherTodasFormOptions() {
    console.log("▶️ Preenchendo opções extras...");

    let todasQuestoes = document.querySelectorAll('input[name^="questions-"][name$="-name_text"]');

    for (let i = 0; i < todasQuestoes.length; i++) {
        let todasOpcoes = document.querySelectorAll(`input[name^="questions-${i}-options-"][name$="-key"]`);
        let todasOpcoesValue = document.querySelectorAll(`input[name^="questions-${i}-options-"][name$="-value"]`);

        console.log(`📌 Encontradas ${todasOpcoes.length} opções na questão ${i + 1}.`);

        let preenchidos = 0; // Contador de quantos espaços já foram preenchidos

        for (let j = 0; j < todasOpcoes.length; j++) {
            // Se o campo já tem um valor, significa que é uma lista de opções -> Pular preenchimento
            if (todasOpcoes[j].value.trim() !== "") {
                console.log(`⚠️ Espaço ${j + 1} já preenchido com '${todasOpcoes[j].value}', pulando...`);
                continue;
            }

            if (preenchidos === 0) {
                todasOpcoes[j].value = `_RUN_TASK_AFTER`;
                todasOpcoesValue[j].value = `condo.tasks.update_order`;
            } else if (preenchidos === 1) {
                todasOpcoes[j].value = `_RUN_TASK_AFTER#order_id`;
                todasOpcoesValue[j].value = `{order.id}`;
            } else if (preenchidos === 2) {
                const numeroQuestao = (i + 1).toString().padStart(2, '0');
                todasOpcoes[j].value = `_RUN_TASK_AFTER#${numeroQuestao}. ${todasQuestoes[i].value}`;
                todasOpcoesValue[j].value = `{${todasQuestoes[i].value}${getExtensionByMsgType(questoes[i].msg_type)}}`;
            }

            todasOpcoes[j].dispatchEvent(new Event('input', { bubbles: true }));
            todasOpcoesValue[j].dispatchEvent(new Event('input', { bubbles: true }));

            console.log(`✅ Opção extra preenchida: ${todasOpcoes[j].value} -> ${todasOpcoesValue[j].value}`);
            preenchidos++;

            // Se já preenchemos todas as opções extras, saímos do loop
            if (preenchidos >= 3) break;
        }
    }

    console.log("✅ Todas as opções extras foram preenchidas!");
}


// Função para preencher as opções extras (_RUN_TASK_AFTER) sem sobrescrever listas de opções
async function preencherTodasFormOptions() {
    console.log("▶️ Preenchendo opções extras...");

    let todasQuestoes = document.querySelectorAll('input[name^="questions-"][name$="-name_text"]');

    for (let i = 0; i < todasQuestoes.length; i++) {
        let todasOpcoes = document.querySelectorAll(`input[name^="questions-${i}-options-"][name$="-key"]`);
        let todasOpcoesValue = document.querySelectorAll(`input[name^="questions-${i}-options-"][name$="-value"]`);

        console.log(`📌 Encontradas ${todasOpcoes.length} opções na questão ${i + 1}.`);

        let preenchidos = 0; // Contador de quantos espaços já foram preenchidos

        for (let j = 0; j < todasOpcoes.length; j++) {
            // Se o campo já tem um valor, significa que é uma lista de opções -> Pular preenchimento
            if (todasOpcoes[j].value.trim() !== "") {
                console.log(`⚠️ Espaço ${j + 1} já preenchido com '${todasOpcoes[j].value}', pulando...`);
                continue;
            }

            if (preenchidos === 0) {
                todasOpcoes[j].value = `_RUN_TASK_AFTER`;
                todasOpcoesValue[j].value = `condo.tasks.update_order`;
            } else if (preenchidos === 1) {
                todasOpcoes[j].value = `_RUN_TASK_AFTER#order_id`;
                todasOpcoesValue[j].value = `{order.id}`;
            } else if (preenchidos === 2) {
                const numeroQuestao = (i + 1).toString().padStart(2, '0');
                todasOpcoes[j].value = `_RUN_TASK_AFTER#${numeroQuestao}. ${todasQuestoes[i].value}`;
                todasOpcoesValue[j].value = `{${todasQuestoes[i].value}${getExtensionByMsgType(questoes[i].msg_type)}}`;
            }

            todasOpcoes[j].dispatchEvent(new Event('input', { bubbles: true }));
            todasOpcoesValue[j].dispatchEvent(new Event('input', { bubbles: true }));

            console.log(`✅ Opção extra preenchida: ${todasOpcoes[j].value} -> ${todasOpcoesValue[j].value}`);
            preenchidos++;

            // Se já preenchemos todas as opções extras, saímos do loop
            if (preenchidos >= 3) break;
        }
    }

    console.log("✅ Todas as opções extras foram preenchidas!");
}

// ==============================
// EXECUÇÃO FINAL
// ==============================

async function executarSequencia() {
    console.log("🚀 Iniciando sequência...");

    console.log("▶️ Passo 1: Preenchendo nome do formulário...");
    preencherNomeFormulario();

    console.log("▶️ Passo 2: Preenchendo campo 'Number group'...");
    preencherNumberGroup();

    console.log("▶️ Passo 3: Preenchendo campo 'Owner'...");
    preencherOwner();

    console.log("▶️ Passo 4: Preenchendo campo 'Start cmd text'...");
    preencherStartCmdText();

    console.log("▶️ Passo 5: Preenchendo campo 'End cmd text'...");
    preencherEndCmdText();

    console.log("▶️ Passo 6: Preenchendo campo 'response_timeout'...");
    preencherTimeout();

    console.log("▶️ Passo 7: Preenchendo campo 'Msg timeout'...");
    preencherMsgTimeout();

    console.log("▶️ Passo 8: Preenchendo questões...");
    await preencherChatbot();
    console.log("✅ Passo 8 concluído!");

    console.log("▶️ Passo 9: Criando espaços para todas as opções...");
    for (let i = 0; i < questoes.length; i++) {
        await adicionarOpcoesLista(i, questoes[i]); // 🔹 Criando os espaços para listas de opções
    }
    await adicionarTodasFormOptions(); // 🔹 Criando os espaços para opções extras (_RUN_TASK_AFTER, order_id)
    console.log("✅ Passo 9 concluído!");

    console.log("⏳ Aguardando tempo extra para garantir que os campos de opções sejam renderizados...");
    await new Promise(resolve => setTimeout(resolve, 3000)); // Espera extra para segurança

    console.log("▶️ Passo 10: Preenchendo valores das opções da lista...");
    for (let i = 0; i < questoes.length; i++) {
        await preencherOpcoesLista(i, questoes[i]);
    }
    console.log("✅ Passo 10 concluído!");

    console.log("▶️ Passo 11: Preenchendo opções extras (ex: _RUN_TASK_AFTER, order_id)...");
    await preencherTodasFormOptions(); // 🔹 Agora preenche as opções extras que já foram criadas
    console.log("✅ Passo 11 concluído!");

    console.log("🎉 Processo finalizado com sucesso!");
}

// Inicia a sequência
executarSequencia();

// Função auxiliar para obter a extensão correta com base no tipo de mensagem
function getExtensionByMsgType(msgType) {
    switch (msgType) {
        case 'Texto':
            return '.text';
        case 'Numérico':
            return '.number';
        case 'Data':
            return '.date';
        case 'CEP':
            return '.text';
        case 'Sim/Não':
        case 'Lista de opções':
            return '.value';
        case 'Localização':
            return '|tojson';
        case 'Imagem':
        case 'Vídeo':
        case 'Áudio':
        case 'Documento':
        case 'Assinatura':
            return '.url';
        case 'Código de Barras / QR':
        case 'Placa de carro':
            return '.text';
        case 'Sem resposta (pular para a próxima pergunta)':
            return '.text';
        default:
            return '.text';
    }
}


