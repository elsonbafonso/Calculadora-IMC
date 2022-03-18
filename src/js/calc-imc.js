const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep,nextStep)
{
    let dNome, dBlock;
    if(currentStep == 1)
    {
        dNome = firstDiv;
    }
    else if(currentStep == 2)
    {
        dNome = secondDiv;
    }
    else
    {
        dNome = finalDiv;
    }

    dNome.style.display ='none';

    if(nextStep == 1)
    {
        dBlock = firstDiv;
    }
    else if(nextStep == 2)
    {
        dBlock = secondDiv;
    }
    else
    {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block'
}

function validate()
{
    const peso   = document.getElementById('peso');
    const altura = document.getElementById('altura')
    peso.style.border   = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value)
    {
        if(!peso.value && !altura.value)
        {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        }
        else if(!peso.value)
        {
            peso.style.border = '1px solid red';
        }
        else
        {
            altura.style.border = '1px solid red';
        }
    }
    else
    {
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById('resultado');
        
        if(imc < 18.5)
        {
            result.innerHTML = 'Magreza | Grau Obesidade: 0'
            result.style.color = 'yellow'
        }
        else if(imc >= 18.5 && imc < 25)
        {
            result.innerHTML = 'Normal | Grau Obesidade: 0'
            result.style.color = 'green'
        }
        else if(imc >= 25 && imc < 30)
        {
            result.innerHTML = 'Sobrepeso | Grau Obesidade: I'
            result.style.color = 'yellow'
        }
        else if(imc >= 30 && imc < 40)
        {
            result.innerHTML = 'Obesidade | Grau Obesidade: II'
            result.style.color = 'orange'
        }
        else
        {
            result.innerHTML = 'Obesidade Grave | Grau Obesidade: III'
            result.style.color = 'red'
        }
        go(2,3);
    }
    
}