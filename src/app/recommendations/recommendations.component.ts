import {Component} from '@angular/core';
import {faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent {

  faLinkedin = faLinkedinIn;
  faFacebook = faFacebookF;


  items = [
    {
      name: 'Hector Arenas',
      descriptionParagraphs: [
        'I recommend Cristian Ionas based on our past professional collaboration. During the time he worked as an external consultant for us, he consistently demonstrated exceptional skills in .NET development, particularly in microservices and event-driven architecture. His problem-solving abilities and critical thinking were of the highest caliber, leading to the consistent delivery of high-quality results. His flexibility and motivation were evident throughout our projects.',
        'Moreover, he is not only super capable, but also willing to learn more, be it in the business topic or possible technical solutions. His interest and ability to understand the full picture made him an invaluable member of the team. His willingness to help enabled other team members to get to the same level of understanding quickly too.'
      ],
      image: 'https://media.licdn.com/dms/image/C5103AQG36bTG4lJSwQ/profile-displayphoto-shrink_800_800/0/1516985556898?e=1691625600&v=beta&t=blTmh5-O0QBxILU0ooJEbk3kvnbK0JQbUIS0mzxIvOA',
      role: 'Engineering Manager'
    }
  ];
}
