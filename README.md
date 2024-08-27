# Project Acedboard Overview
The goal of this project was to accurately translate the Figma design for the Acedboard help section into a functional and responsive web page. The design provided a clear vision, and the implementation focused on maintaining fidelity to the original layout while ensuring scalability and responsiveness.

## Setup

1. Clone the repository

2. Install dependencies using a package manager of your choice:

    ```sh
    npm install
    # or
    yarn install
    ```

## Technologies Used
- Next
- React
- Tailwind CSS
- TypeScript
- Vercel (Deployment)


# Design Translation

## Component Structuring

- Modular Components: The Figma design was analyzed and broken down into reusable React components. This modular approach ensured that each section of the help page could be easily maintained and updated. 
Key components include:

- CustomButton
- EmailSubscription
- ArticleSection
- ImageWithText
- InputWithButton

## Component Hierarchy
 A clear hierarchy was established to maintain the structure and flow of the page, with each component corresponding to a specific section of the design.

- Styling with Tailwind CSS
Utility-First Approach: Tailwind CSS was used to style the components, leveraging its utility classes for rapid implementation. This approach allowed for precise control over spacing, alignment, and responsiveness.

- Custom Styles: Where necessary, custom margin, padding, and width utilities were applied to match the Figma design exactly, particularly for unique layout requirements.

- Responsive Layout
Mobile-First Design: The layout was implemented with a mobile-first approach, ensuring that the design is fully responsive on smaller screens. Tailwind's responsive utilities were used to adapt the layout for larger screens, maintaining alignment and spacing.

- Pending Tablet View: The tablet view is a work in progress and will be implemented to complete the responsive design strategy.

## Text and Image Alignment
Complex Layouts: Aligning text and images as envisioned in the Figma design was one of the more challenging aspects. Specific challenges included:

- Image Placement: The first image was positioned halfway beside the ArticleSection component, requiring precise adjustments to margins and padding.

- Text Above Images: Ensuring text was correctly placed above images involved careful manipulation of Flexbox properties and custom spacing.

## Challenges Faced
Responsive Spacing:

- Issue: Maintaining consistent spacing between images and text across different screen sizes, without overlaps or misalignment.
- Solution: Tailwind CSS's custom margin and padding utilities were used to fine-tune the spacing, ensuring a balanced and responsive layout.
Component Flexibility:

- Issue: Some components, particularly ArticleSection and InputWithButton, tended to stretch beyond their intended boundaries due to Flexbox properties.
- Solution: Adjustments were made to Flexbox settings, such as aligning items to flex-end and setting max-width constraints, to maintain the layout's integrity.


## Next Steps
- Tablet View Implementation: The next phase will involve completing the tablet view to ensure the help section is fully responsive across all devices.

- Accessibility Enhancements: Consideration will be given to accessibility, including the use of ARIA attributes, semantic HTML, and color contrast checks.


## Deployed Page
The Page is deployed and accessible at the following link:
[https://acedboard-gamma.vercel.app/](https://acedboard-gamma.vercel.app/)