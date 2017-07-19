let data = {
  'Happy': [
    '【ツ】', '㋡', '(ツ)', '【シ】', '㋛', '(シ)', '\_(シ)_/', '(´ツ｀)', '（ツ）ノ', '¯\_(ツ)_/¯', '└㋡┘', '╘㋡╛', '٩㋡۶', '( ＾◡＾)っ', '^o^', '^.^', 'ᵔ_ᵔ', '┏(＾0＾)┛┗(＾0＾)┓', 'ت', 'ټ', '≧◡≦', 'ᵔᴥᵔ', '(°⌣°)', '٩(^‿^)۶', 
    '٩(●̮̮̃•̃)۶', '٩(-̮̮̃-̃)۶', '٩(͡๏̮͡๏)۶', '(•‿•)', 'ó‿ó', '٩◔‿◔۶', 'ಠ◡ಠ', '●‿●', '( \'‿\' )', '^‿^', '(｡◕‿◕｡)', '┌( ಠ‿ಠ)┘', '◉◡◉', '(˘◡˘)', '(^^,)', '◔◡◉', '⊂◉‿◉つ', 'ʕʘ‿ʘʔ', '＼(^-^)／', 'ﾍ(￣▽￣*)ﾉ', 'ヽ(^◇^*)/', '♪ヽ(´▽｀)ノ', 'ヾ(*´∀｀*）ノ', 'ヽ(〃＾▽＾〃)ﾉ', 'ヽ(ﾟ▽ﾟ*)乂(*ﾟ▽ﾟ)ﾉ', '♪＼(*＾▽＾*)／＼(*＾▽＾*)／', '＼（＾○＾）人（＾○＾）／', 'ヾ(＾▽＾)ﾉ', '(´ᗢ｀)', '\,,/(^_^)\,,/', 'ۜ\(סּںסּَ` )/ۜ ', '(ˆڡˆ)', 'ヅ', 'ツ', 'ッ', 'シ', '(ﾟヮﾟ)', '(´ー`)', '(´▽`)', '☯‿☯', '(ﾟーﾟ)', '\(• ◡ •)/', '\( ﾟ◡ﾟ)/', '(✌ﾟ∀ﾟ)☞', '◎ܫ◎', '◙‿◙', '（=^_^=）', '(=^｡^=)', '《≡^o^》', '凸(¬◡¬)凸', '(◦\'⌣\'◦)', '٩(*❛⊰❛)۶', '( ͡° ᴥ ͡°)', '☺✌', '( ͡° ͜ʖ ͡°)', '( ͜。 ͡ʖ ͜。)', ' ✌(｀ε´ )', '(◟ᅇ)◜', '(＊☉౪ ⊙｡)ﾉ', '(っ˘ڡ˘ς)', '(\'\'`▽´)-σ ', '┐(・。・┐) ♪ ', 'ƪ(ړײ)‎ƪ​​ ', '(ʃƪ˘ڡ˘) ', '(ʃƪˆ▿ˆ) ', 'ヽ༼ຈل͜ຈ༽ﾉ', '( ͡ᶢ ͜ʖ ͡ᶢ)', '٩༼❦‿❦༽۶', '(/0_0)/'
  ],
  'Cute': [
    '(ღ˘◡˘ღ)', '✿◕ ‿ ◕✿', '(✿◠‿◠)', '(◕‿◕✿)', '☾˙❀‿❀˙☽', '(◡‿◡✿)', '✿ܓ', '❀ܓ', '◤(¬‿¬)◥', '❤‿❤', '♥‿♥', 'ლ(╹◡╹ლ)', '(｡´‿｀♡)', '(°◡°♡).:｡', '❀‿❀', '(´∀｀)♡', '（*´▽｀*）', '（●´∀｀）ノ♡', '♡＾▽＾♡', '(づ｡◕‿◕｡)づ', '(｡-_-｡ )人( ｡-_-｡)', '♡o｡.(✿ฺ｡ ✿ฺ)', '(づ￣ ³￣)づ', '(ღ˘⌣˘ღ)', '(︶ε︶メ)', '(｡･_･｡)', '(/◔ ◡ ◔)/', 'ღ◕‿◕｡', '｡◕‿◕ღ', '◡‿◡✿', '╮(︶ε︶メ)╭', '유♥웃 ℒℴνℯ ヾ(✿❛◡❛)ノ', '(~˘з˘)~~(˘ε˘~)', 'ღ(◕ ᴥ ◕)', '(з˘⌣˘ε)', '( ˘з˘)ε˘`)', '(っ˘з(O.O )♥', '(っ◔◡◔)っ', '( ￣ﾉ∇￣)￣ｰ￣)', '(`˘з(•˘⌣˘•) ', '(っ˘з(˘⌣˘ ) ', '♥(ˆ⌣ˆԅ) ', '༼ つ ◕_◕ ༽つ', '(Ɔ ˘⌣˘)♥(˘⌣˘ C)'
  ],
  'About': [
    'Dev: Vu Anh Hao', 'https://vuanhhaogk.github.io', 'ﾍ(￣▽￣*)ﾉ '
  ]
}

let cat_list = document.getElementById('cat-list')
let cat_content = document.getElementById('cat-content')
let is_first = true

for (let name in data){
  let cat = data[name]
  let cat_button = document.createElement('button')
  cat_button.innerHTML = name
  cat_list.appendChild(cat_button)

  let cat_group = document.createElement('div')
  cat_group.className = 'group'
  cat_content.appendChild(cat_group)

  if (is_first){
    cat_group.setAttribute('active', 'true')
    cat_button.setAttribute('active', 'true')
    is_first = false
  }

  cat_button.onclick = () => {
    cat_content.querySelector('.group[active=true]').setAttribute('active', 'false')
    cat_list.querySelector('button[active=true]').setAttribute('active', 'false')

    cat_group.setAttribute('active', 'true')
    cat_button.setAttribute('active', 'true')
  }

  for (let emoti of cat){
    let item = document.createElement('button')
    item.className = 'item btn'
    item.innerHTML = emoti
    item.setAttribute('data-clipboard-text', emoti)
    cat_group.appendChild(item)
  }
}

(new Clipboard('.btn')).on('success', () => {
    let success = document.getElementById('success')
    success.style.display = 'flex'

    setTimeout(() => {
      success.style.display = 'none'
    }, 1000)
})