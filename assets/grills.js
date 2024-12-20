(() => {
    if (matchMedia("(max-width: 640px)").matches) {
        return
    }

    function E(tag, props) {
        let children;
        if (props) {
            children = props.children
            delete props.children
        }
        const element = Object.assign(document.createElement(tag), props)

        if (children) {
            children.forEach(child => element.append(child))
        }
        return element
    }

    const koha = ["nt01", "nt02", "nt03", "nt04", "nt05", "nt06", "nt07", "nt07b", "t01a", "t01b", "t01c", "t02", "t02b", "t03", "t03b", "t04", "t04b", "t05", "t05b", "t06", "t07", "t08", "t09", "t09b", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t17b", "t18", "t19"]
    const his = ["nt01", "nt02", "nt03", "nt04", "nt04b", "t01", "t01b", "t01c", "t02", "t03", "t04", "t05", "t07", "t08", "t09", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t16b", "t17", "t18", "t19", "t19b", "t20", "t21", "t21b", "t22", "t23", "t24", "t25", "t26", "t28", "t29"]

    document.body.append(E("div", { className: "image", style: "left: 0px;", children: [E("img", { src: `/_/sprites/his/his_${his[Math.floor(Math.random() * his.length)]}.out.png` })] }))
    document.body.append(E("div", { className: "image", style: "right: 0px;", children: [E("img", { src: `/_/sprites/koha/koha_${koha[Math.floor(Math.random() * koha.length)]}.out.png` })] }))
})()