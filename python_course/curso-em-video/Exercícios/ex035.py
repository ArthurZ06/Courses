print('-=' * 20)
print('Analisador de Triângulos')
print('-=' * 20)
r1 = float(input('Primeira Reta: '))
r2 = float(input('Segunda Reta: '))
r3 = float(input('Terceira  Reta: '))

if r1 < r2 + r3 and r2 < r1 and r3 < r1 + r2 :
    print('Os segmentos acima PODEM FORMAR UM Triângulo')
else:
    print('Os segmentos acima NÃO PODEM FORMAR UM Triângulo')
