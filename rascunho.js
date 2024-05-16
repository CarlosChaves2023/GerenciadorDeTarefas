/*
[JS-A05] Você foi convidado(a) a desenvolver um aplicativo web para ajudar a gerenciar as tarefas domésticas de uma família agitada. O objetivo é criar um "Gerenciador de Tarefas Domésticas" que permita que todos os membros da família adicionem, removam e atualizem suas tarefas diárias, garantindo que tudo seja feito de forma organizada.

A resposta deve ser enviada em uma das seguintes formas:

Arquivo Zipado
Link do GitHub (Repositório Público)
Link do Drive (Acesso para qualquer pessoa com o link)
*/
var tarefasDomesticas = []
var tarefaConcluídas = []//atualização

while(true){
    var opcao = prompt(`Deseja:
    [1] Adicionar Tarefa
    [2] Remover Tarefa
    [3] Atualizar Tarefa
    [4] Sair`)

    switch(opcao){
        case '1':
            while(true){
                var add = prompt(`Digite a tarefa que deseja adicionar: `)
                tarefasDomesticas.push(add)
                console.log(tarefasDomesticas)
                var resp = prompt(`Deseja continuar adicionando?
                [1] Sim
                [2] Não`)
                if (resp == 2){
                    break
                }
            }
            break

        case '2':
            while(true){
                var del = prompt(`Digite a tarefa a remover: ${tarefasDomesticas}`)
                var apagar = tarefasDomesticas.indexOf(del)
                
                tarefasDomesticas.splice(apagar, 1)
                
                console.log(tarefasDomesticas)
                var resp = prompt(`Deseja continuar removendo?
                [1] Sim
                [2] Não`)
                if (resp == 2){
                    break
                }
            }
            break

        case '3':
            while(true){
                var taskUpDate = prompt(`Digite a tarefa que deseja atualizar: ${tarefasDomesticas}`)
                var upDate = prompt(`Atualização de Tarefa:
                [1] Concluída
                `)

                if(upDate == '1'){
                    var apagar = tarefasDomesticas.indexOf(taskUpDate)
                    tarefaConcluídas.push(taskUpDate)
                    tarefasDomesticas.splice(apagar, 1)

                    console.log(`Tarefas Domesticas - ${tarefasDomesticas}`)
                    console.log(`Tarefas Concluídas - ${tarefaConcluídas}`)

                } else if(upDate == '2'){
                    var apagar = tarefasDomesticas.indexOf(taskUpDate)
                    tarefaPausada.push(taskUpDate)
                    tarefasDomesticas.splice(apagar, 1)

                    console.log(`Tarefas Domesticas - ${tarefasDomesticas}`)
                    console.log(`Tarefas Concluídas - ${tarefaConcluídas}`)

                }
                
            
                var resp = prompt(`Deseja continuar atualizando?
                [1] Sim
                [2] Não`)
                if (resp == 2){
                    break
                }
            }
            break
        
        case '4':
            break

        default:
            alert(`Opção inválida.`)

    }
    var resp = prompt(`Digite uma das opções do menu abaixo:
            [1] Para voltar ao menu inicial.
            [2] Sair`)
            if (resp == 2){
                break
            }
    
}