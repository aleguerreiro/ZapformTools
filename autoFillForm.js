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
        "name_text": "boas_vindas",
        "type": "Lista de opções",
        "desc_text": "Olá! 👋 Bem-vindo ao atendimento da Federação Catarinense de Futsal (FCFS). 🤖⚽\nSou o assistente virtual da FCFS e estou aqui para ajudá-lo com informações e serviços relacionados ao futsal em Santa Catarina.\nPor favor, escolha uma das opções abaixo digitando o número correspondente:\n\n1️⃣ Campeonatos e Calendário\n2️⃣ Inscrições e Transferências de Atletas\n3️⃣ Resultados e Notícias\n4️⃣ Contato com a Diretoria\n5️⃣ Contato com o Financeiro\n6️⃣ Informações para Árbitros\n7️⃣ Outras Informações",
        "goto_question": "",
        "order_int": 10,
        "option_list": "Campeonatos e Calendário;Inscrições e Transferências de Atletas;Resultados e Notícias;Contato com a Diretoria;Contato com o Financeiro;Informações para Árbitros;Outras Informações",
        "opcoes": [
            {
                "key": "1",
                "value": "Campeonatos e Calendário"
            },
            {
                "key": "2",
                "value": "Inscrições e Transferências de Atletas"
            },
            {
                "key": "3",
                "value": "Resultados e Notícias"
            },
            {
                "key": "4",
                "value": "Contato com a Diretoria"
            },
            {
                "key": "5",
                "value": "Contato com o Financeiro"
            },
            {
                "key": "6",
                "value": "Informações para Árbitros"
            },
            {
                "key": "7",
                "value": "Outras Informações"
            }
        ]
    },
    {
        "name_text": "campeonatos_calendario",
        "type": "Lista de opções",
        "desc_text": "{# Fluxo para Campeonatos e Calendário #}\n{% if boas_vindas.key == \"1\" %}Você escolheu *Campeonatos e Calendário*. ⚽\n\nEscolha:\n1️⃣ *Calendário GERAL de 2025*\n2️⃣ *Categoria de Base Masculina*\n3️⃣ *Categoria de Base Feminina*\n4️⃣ *Série Ouro Masculina*\n5️⃣ *Série Ouro Feminina*\n6️⃣ *Série Prata Masculina*\n7️⃣ *Série Prata Feminina*\n8️⃣ *Copa Santa Catarina*{% endif %}",
        "goto_question": "",
        "order_int": 20,
        "option_list": "Calendário GERAL de 2025;Categoria de Base Masculina;Categoria de Base Feminina;Série Ouro Masculina;Série Ouro Feminina;Série Prata Masculina;Série Prata Feminina;Copa Santa Catarina",
        "opcoes": [
            {
                "key": "1",
                "value": "Calendário GERAL de 2025"
            },
            {
                "key": "2",
                "value": "Categoria de Base Masculina"
            },
            {
                "key": "3",
                "value": "Categoria de Base Feminina"
            },
            {
                "key": "4",
                "value": "Série Ouro Masculina"
            },
            {
                "key": "5",
                "value": "Série Ouro Feminina"
            },
            {
                "key": "6",
                "value": "Série Prata Masculina"
            },
            {
                "key": "7",
                "value": "Série Prata Feminina"
            },
            {
                "key": "8",
                "value": "Copa Santa Catarina"
            }
        ]
    },
    {
        "name_text": "opcao_calendario_geral",
        "type": "Sem resposta",
        "desc_text": "{% if campeonatos_calendario.key == \"1\" %}\nSegue o link para o *Calendário GERAL de 2025*: [Clique aqui](#).\n{% elif campeonatos_calendario.key == \"2\" %}\nSegue o documento com informações da *Categoria de Base Masculina*: [Baixar](#).\n{% elif campeonatos_calendario.key == \"3\" %}\nSegue o documento com informações da *Categoria de Base Feminina*: [Baixar](#).\n{% elif campeonatos_calendario.key == \"4\" %}\nSegue o link com informações da *Série Ouro Masculina*: [Clique aqui](#).\n{% elif campeonatos_calendario.key == \"5\" %}\nSegue o link com informações da *Série Ouro Feminina*: [Clique aqui](#).\n{% elif campeonatos_calendario.key == \"6\" %}\nSegue o documento da *Série Prata Masculina*: [Baixar](#).\n{% elif campeonatos_calendario.key == \"7\" %}\nSegue o documento da *Série Prata Feminina*: [Baixar](#).\n{% elif campeonatos_calendario.key == \"8\" %}\nSegue o link para a *Copa Santa Catarina*: [Clique aqui](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 30,
        "option_list": ""
    },
    {
        "name_text": "inscricoes_transferencias",
        "type": "Lista de opções",
        "desc_text": "{# Fluxo para Inscrições e Transferências de Atletas #}\n{% if boas_vindas.key == \"2\" %}Você escolheu *Inscrições e Transferências de Atletas*. 📝\n\nEscolha:\n1️⃣ *Como inscrever um atleta/uma equipe*\n2️⃣ *Taxas e Emolumentos 2025*\n3️⃣ *Datas Limites para transferências Estaduais, Nacionais e Internacionais*{% endif %}",
        "goto_question": "opcao_inscricao",
        "order_int": 40,
        "option_list": "Como inscrever um atleta/uma equipe;Taxas e Emolumentos 2025;Datas Limites para transferências Estaduais, Nacionais e Internacionais",
        "opcoes": [
            {
                "key": "1",
                "value": "Como inscrever um atleta/uma equipe"
            },
            {
                "key": "2",
                "value": "Taxas e Emolumentos 2025"
            },
            {
                "key": "3",
                "value": "Datas Limites para transferências Estaduais, Nacionais e Internacionais"
            }
        ]
    },
    {
        "name_text": "opcao_inscricao_atleta",
        "type": "Sem resposta",
        "desc_text": "{% if inscricoes_transferencias.key == \"1\" %}\nPara inscrever um atleta ou uma equipe, siga o regulamento disponível no link: [Clique aqui](#).\n\nOs formulários necessários podem ser baixados aqui: [Baixar](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 50,
        "option_list": ""
    },
    {
        "name_text": "opcao_taxas_emolumentos",
        "type": "Sem resposta",
        "desc_text": "{% if inscricoes_transferencias.key == \"2\" %}\nA tabela de *Taxas e Emolumentos 2025* está disponível no seguinte link: [Clique aqui](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 60,
        "option_list": ""
    },
    {
        "name_text": "opcao_datas_limites",
        "type": "Sem resposta",
        "desc_text": "{% if inscricoes_transferencias.key == \"3\" %}\nConfira as *Datas Limites para transferências*:\n\n📌 *Estaduais*: [Clique aqui](#)\n📌 *Nacionais*: [Clique aqui](#)\n📌 *Internacionais*: [Clique aqui](#)\n{% endif %}",
        "goto_question": "",
        "order_int": 70,
        "option_list": ""
    },
    {
        "name_text": "resultados_noticias",
        "type": "Lista de opções",
        "desc_text": "{# Fluxo para Resultados e Notícias #}{% if boas_vindas.key == \"3\" %}\nVocê escolheu *Resultados e Notícias*. 📰⚽\n\nDeseja receber:\n1️⃣ *Resultados de jogos*\n2️⃣ *Últimas notícias*\n3️⃣ *Destaques da Liga Nacional*{% endif %}",
        "goto_question": "opcao_resultados",
        "order_int": 80,
        "option_list": "Resultados de jogos;Últimas notícias;Destaques da Liga Nacional",
        "opcoes": [
            {
                "key": "1",
                "value": "Resultados de jogos"
            },
            {
                "key": "2",
                "value": "Últimas notícias"
            },
            {
                "key": "3",
                "value": "Destaques da Liga Nacional"
            }
        ]
    },
    {
        "name_text": "opcao_resultados_jogos",
        "type": "Sem resposta",
        "desc_text": "{% if resultados_noticias.key == \"1\" %}\nConfira os *Resultados de jogos* atualizados em tempo real: [Clique aqui](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 90,
        "option_list": ""
    },
    {
        "name_text": "opcao_ultimas_noticias",
        "type": "Sem resposta",
        "desc_text": "{% if resultados_noticias.key == \"2\" %}\nAcompanhe as *Últimas notícias* do futebol em nosso portal: [Clique aqui](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 100,
        "option_list": ""
    },
    {
        "name_text": "opcao_destaques_liga",
        "type": "Sem resposta",
        "desc_text": "{% if resultados_noticias.key == \"3\" %}\nVeja os *Destaques da Liga Nacional*, incluindo os artilheiros, melhores jogadores e momentos importantes: [Clique aqui](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 110,
        "option_list": ""
    },
    {
        "name_text": "contato_diretoria",
        "type": "Sem resposta",
        "desc_text": "{# Fluxo para Contato com a Diretoria #}\n{% if boas_vindas.key == \"4\" %}\nVocê escolheu *Contato com a Diretoria*. 🏢\nPor favor, informe os seguintes dados para que possamos direcionar seu contato:\n{% endif %}",
        "goto_question": "",
        "order_int": 120,
        "option_list": ""
    },
    {
        "name_text": "solicitar_nome_diretoria",
        "type": "Texto",
        "desc_text": "{# Fluxo para Contato com a Diretoria #}\n{% if contato_diretoria.key == \"1\" %}📝 Por favor, informe seu nome completo:{% endif %}",
        "goto_question": "",
        "order_int": 130,
        "option_list": ""
    },
    {
        "name_text": "solicitar_descricao_diretoria",
        "type": "Texto",
        "desc_text": "{# Fluxo para Contato com a Diretoria #}\n{% if contato_diretoria.key == \"1\" %}✉️ Agora, descreva o problema ou solicitação:{% endif %}",
        "goto_question": "",
        "order_int": 140,
        "option_list": ""
    },
    {
        "name_text": "confirmacao_diretoria",
        "type": "Sem resposta",
        "desc_text": "🟢 Obrigado, { solicitar_nome_diretoria.text }. Recebemos sua mensagem sobre: { solicitar_descricao_diretoria.text }.\nUm responsável da Diretoria entrará em contato em breve.\n📌 Protocolo de atendimento: #DIR-[número-gerado].\n⏰ Horário de atendimento: Segunda a sexta-feira, das 9h às 18h.",
        "goto_question": "",
        "order_int": 150,
        "option_list": ""
    },
    {
        "name_text": "contato_financeiro",
        "type": "Lista de opções",
        "desc_text": "{# Fluxo para Contato com o Financeiro #}\n{% if boas_vindas.key == \"5\" %}\nVocê escolheu *Contato com o Financeiro*. 💵\nPor favor, escolha o assunto que deseja tratar:\n\n1️⃣ Envio do borderô da arbitragem\n2️⃣ Ligas afiliadas\n3️⃣ Enviar Comprovantes de pagamentos para Federação\n4️⃣ Outros assuntos financeiros\n{% endif %}",
        "goto_question": "",
        "order_int": 160,
        "option_list": "Envio do borderô da arbitragem;Ligas afiliadas;Enviar Comprovantes de pagamentos para Federação;Outros assuntos financeiros",
        "opcoes": [
            {
                "key": "1",
                "value": "Envio do borderô da arbitragem"
            },
            {
                "key": "2",
                "value": "Ligas afiliadas"
            },
            {
                "key": "3",
                "value": "Enviar Comprovantes de pagamentos para Federação"
            },
            {
                "key": "4",
                "value": "Outros assuntos financeiros"
            }
        ]
    },
    {
        "name_text": "solicitar_nome_financeiro",
        "type": "Texto",
        "desc_text": "{# Fluxo para Contato com o Financeiro #}\n{% if contato_financeiro.key == \"1\" %}📝 Por favor, informe seu nome completo:{% endif %}",
        "goto_question": "",
        "order_int": 170,
        "option_list": ""
    },
    {
        "name_text": "solicitar_descricao_financeiro",
        "type": "Texto",
        "desc_text": "{# Fluxo para Contato com o Financeiro #}\n{% if contato_financeiro.key == \"1\" %}✉️ Agora, descreva o problema ou solicitação:{% endif %}",
        "goto_question": "",
        "order_int": 180,
        "option_list": ""
    },
    {
        "name_text": "confirmacao_financeiro",
        "type": "Sem resposta",
        "desc_text": "🟢 Obrigado, { solicitar_nome_financeiro.text }. Recebemos sua mensagem sobre: { solicitar_descricao_financeiro.text }.\nUm responsável do Financeiro entrará em contato em breve.\n📌 Protocolo de atendimento: {order.id}.\n⏰ Horário de atendimento: Segunda a sexta-feira, das 9h às 18h.",
        "goto_question": "",
        "order_int": 190,
        "option_list": ""
    },
    {
        "name_text": "informacoes_arbitros",
        "type": "Lista de opções",
        "desc_text": "{# Fluxo para Informações para Árbitros #}{% if boas_vindas.key == \"6\" %}\nVocê escolheu *Informações para Árbitros*. 🖋️⚽\n\nEscolha a opção desejada:\n1️⃣ *Escala de arbitragem*\n2️⃣ *Enviar foto da partida, súmulas e relatórios*\n3️⃣ *Pedir dispensa da escala*{% endif %}",
        "goto_question": "opcao_arbitros",
        "order_int": 200,
        "option_list": "Escala de arbitragem;Enviar foto da partida, súmulas e relatórios;Pedir dispensa da escala",
        "opcoes": [
            {
                "key": "1",
                "value": "Escala de arbitragem"
            },
            {
                "key": "2",
                "value": "Enviar foto da partida, súmulas e relatórios"
            },
            {
                "key": "3",
                "value": "Pedir dispensa da escala"
            }
        ]
    },
    {
        "name_text": "opcao_escala_arbitragem",
        "type": "Sem resposta",
        "desc_text": "{# Fluxo para Informações para Árbitros #}{% if informacoes_arbitros.key == \"1\" %}\nConfira a *Escala de Arbitragem* atualizada: [Clique aqui](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 210,
        "option_list": ""
    },
    {
        "name_text": "opcao_enviar_foto",
        "type": "Imagem",
        "desc_text": "{# Fluxo para Informações para Árbitros #}{% if informacoes_arbitros.key == \"2\" %}\nPor favor, envie a *foto da partida, súmulas ou relatórios* aqui. 📸📄\nLembre-se de que todos os documentos devem estar nítidos e legíveis.\n{% endif %}",
        "goto_question": "",
        "order_int": 220,
        "option_list": ""
    },
    {
        "name_text": "opcao_enviar_foto_mais",
        "type": "Lista de opções",
        "desc_text": "{# Fluxo para Informações para Árbitros #}{% if informacoes_arbitros.key == \"2\" %}\n📸 *Deseja enviar mais uma foto?*  \n\n1️⃣ *Sim*  \n2️⃣ *Não*\n{% endif %}",
        "goto_question": "\"1\": \"opcao_enviar_foto\"",
        "order_int": 230,
        "option_list": "Sim;Não",
        "opcoes": [
            {
                "key": "1",
                "value": "Sim"
            },
            {
                "key": "2",
                "value": "Não"
            }
        ]
    },
    {
        "name_text": "opcao_pedir_dispensa",
        "type": "Sem resposta",
        "desc_text": "{# Fluxo para Informações para Árbitros #}{% if informacoes_arbitros.key == \"3\" %}\nPara solicitar a *dispensa da escala*, preencha o formulário no link: [Clique aqui](#){% endif %}",
        "goto_question": "",
        "order_int": 240,
        "option_list": ""
    },
    {
        "name_text": "opcao_pedir_dispensa_foto",
        "type": "Imagem",
        "desc_text": "{# Fluxo para Informações para Árbitros #}{% if informacoes_arbitros.key == \"3\" %}*📸 Envie também uma *foto do boletim do jogo assinado* para formalizar o pedido.{% endif %}",
        "goto_question": "",
        "order_int": 250,
        "option_list": ""
    },
    {
        "name_text": "opcao_pedir_dispensa_mais",
        "type": "Lista de opções",
        "desc_text": "{# Fluxo para Informações para Árbitros #}{% if informacoes_arbitros.key == \"3\" %}\n📸 *Deseja enviar mais uma foto?*  \n\n1️⃣ *Sim*  \n2️⃣ *Não*\n{% endif %}",
        "goto_question": "\"1\": \"opcao_pedir_dispensa_foto\"",
        "order_int": 260,
        "option_list": "Sim;Não",
        "opcoes": [
            {
                "key": "1",
                "value": "Sim"
            },
            {
                "key": "2",
                "value": "Não"
            }
        ]
    },
    {
        "name_text": "outras_informacoes",
        "type": "Lista de opções",
        "desc_text": "{# Fluxo para Outras Informações #}{% if boas_vindas.key == \"7\" %}\nVocê escolheu *Outras Informações*. ℹ️\n\nDigite sua pergunta ou escolha uma das opções abaixo:\n1️⃣ *História da FCFS*\n2️⃣ *Endereço e Contatos*\n3️⃣ *Como se associar à Federação*{% endif %}",
        "goto_question": "opcao_outras_info",
        "order_int": 270,
        "option_list": "História da FCFS;Endereço e Contatos;Como se associar à Federação",
        "opcoes": [
            {
                "key": "1",
                "value": "História da FCFS"
            },
            {
                "key": "2",
                "value": "Endereço e Contatos"
            },
            {
                "key": "3",
                "value": "Como se associar à Federação"
            }
        ]
    },
    {
        "name_text": "opcao_historia_fcfs",
        "type": "Sem resposta",
        "desc_text": "{# Fluxo para Outras Informações #}{% if outras_informacoes.key == \"1\" %}\nA *História da FCFS* pode ser encontrada no link abaixo:\n📖 [Clique aqui para saber mais](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 280,
        "option_list": ""
    },
    {
        "name_text": "opcao_endereco_contatos",
        "type": "Sem resposta",
        "desc_text": "{# Fluxo para Outras Informações #}{% if outras_informacoes.key == \"2\" %}\n📍 *Endereço*: Rua Exemplo, 123 - Cidade/UF \n📞 *Telefone*: (XX) XXXX-XXXX \n📧 *E-mail*: contato@fcfs.com.br \n🌐 *Site*: [www.fcfs.com.br](#)\n{% endif %}",
        "goto_question": "",
        "order_int": 290,
        "option_list": ""
    },
    {
        "name_text": "opcao_como_associar",
        "type": "Sem resposta",
        "desc_text": "{# Fluxo para Outras Informações #}{% if outras_informacoes.key == \"3\" %}\nPara se associar à *Federação*, siga as instruções no link abaixo:\n📝 [Clique aqui para mais detalhes](#).\n{% endif %}",
        "goto_question": "",
        "order_int": 300,
        "option_list": ""
    },
    {
        "name_text": "finalizacao",
        "type": "Sem resposta",
        "desc_text": "{# Mensagem de Finalização #}\n{% if contato_diretoria.key == \"1\" or contato_financeiro.key == \"1\" or informacoes_arbitros.key == \"2\" or informacoes_arbitros.key == \"3\" %}\nSua solicitação foi registrada com sucesso.\n📌 Protocolo de atendimento: {order.id}.\n⏰ Horário de atendimento: Segunda a sexta-feira, das 9h às 18h.\nCaso necessário, um de nossos responsáveis entrará em contato em breve. \n{% endif %}FCFS agradece o contato! 😊",
        "goto_question": "",
        "order_int": 310,
        "option_list": ""
    },
    {
        "name_text": "questao_extra",
        "type": "Texto",
        "desc_text": "Esta é uma questão extra para evitar problemas.",
        "goto_question": "",
        "order_int": 40,
        "option_list": ""
    }
];


    // Questão extra fixa
    const questaoExtra = { name_text: "questao_extra", msg_type: "Texto", desc_text: "Esta é uma questão extra para evitar problemas.", goto_question: "", order_int: 40, type: "Texto" };

function getTypeByType(type) {
    const map = {
        "Texto": "TX",
        "Numérico": "NB",
        "Data": "DT",
        "CEP": "CP",
        "Sim/Não": "YN",
        "Lista de opções": "LS",
        "Localização": "LC",
        "Imagem": "IM",
        "Vídeo": "VI",
        "Áudio": "AU",
        "Documento": "DO",
        "Código de Barras / QR": "BC",
        "Placa de carro": "LP",
        "Assinatura": "SI",
        "Sem resposta (pular para a próxima pergunta)": "SK"
    };

    return map[type] || "TX"; // Se não encontrar, usa "Texto" como padrão
}
       

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
    if (questao.type !== "Lista de opções" || !questao.opcoes || questao.opcoes.length === 0) return;

    console.log(`📌 Criando opções para a questão ${indexQuestao + 1}...`);

    for (let i = 0; i < questao.opcoes.length; i++) {
        await adicionarFormOption(indexQuestao);
        await new Promise(resolve => setTimeout(resolve, 500)); // Pequeno delay para renderização
    }
}

// Função para preencher as opções (depois que todas foram criadas)
async function preencherOpcoesLista(indexQuestao, questao) {
    if (questao.type !== "Lista de opções" || !questao.opcoes || questao.opcoes.length === 0) return;

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
    
            // Preenche o campo name_text
            todasQuestoes[index].value = questao.name_text;
            todasQuestoes[index].dispatchEvent(new Event('input', { bubbles: true }));
    
            // Aguarda um pouco antes de definir o type
            setTimeout(() => {
                let type = document.querySelectorAll('select[name^="questions-"][name$="-type"]');
    
                if (type[index]) {
                    let tipoEsperado = getTypeByType(questao.type);
                    let tipoAtual = type[index].value;
    
                    console.log(`🔍 [Antes da Alteração] Questão ${index + 1} - Type Atual: ${tipoAtual}`);
                    console.log(`🎯 Tipo esperado: ${tipoEsperado}`);
    
                    let optionIndex = Array.from(type[index].options).findIndex(opt => opt.value === tipoEsperado);
    
                    if (optionIndex >= 0) {
                        console.log(`✅ Opção encontrada no select: ${type[index].options[optionIndex].text}`);
                        type[index].selectedIndex = optionIndex; // Define a opção selecionada
                        
                        setTimeout(() => {
                            type[index].dispatchEvent(new Event('change', { bubbles: true }));
                            type[index].dispatchEvent(new Event('input', { bubbles: true }));
    
                            let tipoFinal = type[index].value;
                            console.log(`✅ [Após Alteração] Questão ${index + 1} - Novo Type: ${tipoFinal}`);
                        }, 500); // Delay para garantir que a mudança seja processada
    
                    } else {
                        console.error(`❌ Opção '${tipoEsperado}' não encontrada no select da questão ${index + 1}`);
                    }
                } else {
                    console.error(`❌ Campo 'type' da questão ${index + 1} não encontrado.`);
                }
            }, 1000); // Delay maior para garantir que o elemento esteja renderizado
    
            // Preenche o campo desc_text
            let descText = document.querySelectorAll('textarea[name^="questions-"][name$="-desc_text"]');
            if (descText[index]) {
                descText[index].value = questao.desc_text;
                descText[index].dispatchEvent(new Event('input', { bubbles: true }));
                console.log(`✅ Campo 'desc_text' da questão ${index + 1} preenchido.`);
            } else {
                console.error(`❌ Campo 'desc_text' da questão ${index + 1} não encontrado.`);
            }
    
            // Preenche o campo order_int
            let orderInt = document.querySelectorAll('input[name^="questions-"][name$="-order_int"]');
            if (orderInt[index]) {
                orderInt[index].value = questao.order_int;
                orderInt[index].dispatchEvent(new Event('input', { bubbles: true }));
                console.log(`✅ Campo 'order_int' da questão ${index + 1} preenchido.`);
            } else {
                console.error(`❌ Campo 'order_int' da questão ${index + 1} não encontrado.`);
            }
    
            console.log(`✔️ Questão ${index + 1} preenchida com sucesso.`);
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
async function preencherFormOption(indexQuestao, indexOpcao, questao) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`🔍 Buscando campos da opção ${indexOpcao + 1} na questão ${indexQuestao + 1}...`);

            let opcaoKey = document.querySelector(`input[name="questions-${indexQuestao}-options-${indexOpcao}-key"]`);
            let opcaoValue = document.querySelector(`input[name="questions-${indexQuestao}-options-${indexOpcao}-value"]`);

            if (opcaoKey && opcaoValue) {
                const numeroQuestao = (indexQuestao + 1).toString().padStart(2, '0');
                if (indexOpcao === 0) {
                    opcaoKey.value = `_RUN_TASK_AFTER`;
                    opcaoValue.value = `condo.tasks.update_order`;
                } else if (indexOpcao === 1) {
                    opcaoKey.value = `_RUN_TASK_AFTER#order_id`;
                    opcaoValue.value = `{order.id}`;
                } else if (indexOpcao === 2) {
                    opcaoKey.value = `_RUN_TASK_AFTER#${numeroQuestao}. ${questao.desc_text}`;
                    opcaoValue.value = `{${questao.name_text}${getExtensionByType(questao.type)}}`;
                }

                opcaoKey.dispatchEvent(new Event('input', { bubbles: true }));
                opcaoValue.dispatchEvent(new Event('input', { bubbles: true }));

                console.log(`✅ Opção ${indexOpcao + 1} na questão ${indexQuestao + 1} preenchida com sucesso!`);
            } else if (indexQuestao < questoes.length - 1) {
                console.error(`❌ Campos da opção ${indexOpcao + 1} na questão ${indexQuestao + 1} não encontrados!`);
            }
            resolve();
        }, 1000);
    });
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
            // Verifica se questao[i] existe antes de acessá-lo
            if (!questoes[i]) {
                console.error(`❌ Erro: questão ${i + 1} não encontrada na lista de questões.`);
                continue;
            }
            let questao = questoes[i]; // Definir a variável corretamente

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
                todasOpcoes[j].value = `_RUN_TASK_AFTER#${numeroQuestao}. ${questao.desc_text}`;
                todasOpcoesValue[j].value = `{${questao.name_text}${getExtensionByType(questao.type)}}`;
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

function getExtensionByType(type) {
    switch (type) {
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