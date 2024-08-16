import '../styles/MemberCard.css';

export default function MemberCard({ member }) {
    return (
        <div className='member-card'>
            <div className={`member-image ${member.image}`}></div>
            <h3 className='member-name'>{member.name}</h3>
            <p className='member-info'>{member.info}</p>
        </div>
    );
}
