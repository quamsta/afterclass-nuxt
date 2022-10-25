

export default () => {
    // manually add the script to the DOM
    const script = document.createElement('script')
    script.src = '/bootstrap.bundle.min.js'
    document.head.appendChild(script)
}