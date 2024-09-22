import Event from './Event';
const Calendar = () => {
    return (
        <div className="Calendar"> 
            <table>
                <thead>
                    <tr>
                        <th className='empty'></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="time"> 8 am </td>
                    <td><Event event='Arrive in London, check into hotel' color="pink" /></td>
                    <td><Event event='Breakfast at Borough Market' color="blue" /></td>
                    <td><Event event='Breakfast at a local cafe' color="green" /></td>
                    <td><Event event='Breakfast at the hotel' color="yellow" /></td>
                    <td><Event event='Breakfast at Kensington Gardens' color="purple" /></td>
                    <td><Event event='Breakfast near Tower Bridge' color="green" /></td>
                    <td><Event event='Relaxed breakfast at hotel' color="red" /></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <td><Event event='Explore Hyde Park' color="green" /></td>
                    <td><Event event='Visit the Tower of London' color="purple" /></td>
                    <td><Event event='Tour of Westminster Abbey' color="blue" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Explore Notting Hill' color="pink" /></td>
                    <td><Event event='Visit the British Museum' color="orange" /></td>
                    <td><Event event='Free Time' color="white"/></td>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <td><Event event='Walk through Kensington Gardens' color="blue" /></td>
                    <td><Event event='Walk across Tower Bridge' color="yellow" /></td>
                    <td><Event event='Visit the Houses of Parliament' color="green" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Visit the Natural History Museum' color="purple" /></td>
                    <td><Event event='Visit Trafalgar Square' color="orange" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Explore the Shard' color="green" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Visit Covent Garden' color="pink" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Explore Camden Market' color="orange" /></td>
                </tr>
                <tr>
                    <td className="time">12 pm</td>
                    <td><Event event='Lunch near Buckingham Palace' color="yellow" /></td>
                    <td><Event event='Lunch at Borough Market' color="green" /></td>
                    <td><Event event='Lunch at a local pub' color="purple" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Lunch in Soho' color="pink" /></td>
                    <td><Event event='Lunch at a local cafe' color="blue" /></td>
                    <td><Event event='Lunch at Camden Market' color="orange" /></td>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <td><Event event='Visit Buckingham Palace' color="blue" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Tour the London Eye' color="green" /></td>
                    <td><Event event='Explore the Southbank' color="yellow" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Explore the National Gallery' color="orange" /></td>
                    <td><Event event='Walk along Regent&apos;s Canal' color="pink" /></td>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Visit Shakespeare&apos;s Globe Theatre' color="purple" /></td>
                    <td><Event event='Explore Southbank' color="yellow" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Explore Covent Garden' color="pink" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                </tr>

                <tr>
                    <td className="time">3 pm</td>
                    <td><Event event='Explore local shops or Oxford Street' color="green" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Visit Tate Modern' color="orange" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Walk through St. James&apos;s Park' color="yellow" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                </tr>

                <tr>
                    <td className="time">4 pm</td>
                    <td><Event event='Relax at a local cafe' color="pink" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Relax at a pub' color="green" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Visit Piccadilly Circus' color="orange" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Relax at a cafe in Soho' color="blue" /></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <td><Event event='Walk along the Thames' color="yellow" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Catch a West End show' color="purple" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Relax at Hyde Park' color="green" /></td>
                    <td><Event event='Free Time' color="white" /></td>
                    <td><Event event='Watch the sunset by the London Eye' color="orange" /></td>
                </tr>
                </tbody>
            </table>
         </div>
    )
}

export default Calendar;