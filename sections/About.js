import Container from 'react-bootstrap/Container'

const About = () => (
  <Container className='section'>
    <a className='target' id='about'/>
    <h2 className='display-4 anchor'>About</h2>
    <p>
      The evolution of software development methods is driven by the perennial quest on how to organize projects for better productivity and better quality. The traditional software development projects, which followed well-defined plans and detailed documentations, were unable to meet the dynamism, unpredictability and changing conditions that characterize today's competitive business environment. Agile methods overcame these limits by considering that requirements are dynamic, while customers are unable to definitively state their needs up front.
      Later on, the software industry also started to look at practices from lean manufacturing as a means of further waste elimination by removing all non-value-adding activities.
    </p>
    <p>
      While agile as well as lean software development has already become mainstream in industry and a strong community has crystallized around the new way of thinking, making the transition to the new mindset is still challenging for many companies. Thereby, the practical implementation of Scrum, Kanban or other method often deviates from the proposed framework. Such misalignment usually hides some dysfunctions which, if removed, would allow the company to take full advantage of the agile method.
    </p>
    <p>
      Besides, even though agile methods were originally designed for single, small teams, many organizations have increasingly adopted them in large-scale projects with multiple development teams. Scaling agile software development is complex and brings new challenges, including:
    </p>
    <ul>
      <li>coordination and communication between teams;</li>
      <li>coordination of distributed projects;</li>
      <li>lack of up-front architecture;</li>
      <li>adoption of agile methods in units other than software development departments, such as product management, marketing, and sales.</li>
    </ul>
    <p>
      The objective of LASD is to extend the state-of-the-art in lean and agile software development and spread best practices and stories of successful transitions. Our conference has become a prominent forum where practitioners, researchers, and academics meet to share and discuss their concerns, experience, and research findings.
    </p>
  </Container>
)

export default About
