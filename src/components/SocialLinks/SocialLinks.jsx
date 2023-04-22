
const SocialLinks = () => {
    const header_links = [
        {
            title: 'linkedin',
            href: "https://www.linkedin.com/in/julia-derevianko/"
        }, {
            title: 'behance',
            href: "https://www.behance.net/juliaderevianko"
        }, {
            title: 'dribbble',
            href: "https://dribbble.com/juliaderevianko"
        }
    ]

    return (
        <div className="home_links">
            <ul>
                {header_links.map(link => (
                    <li><a href={link.href}>{link.title}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks