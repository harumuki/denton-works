import React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { useStaticQuery, graphql } from 'gatsby'

interface CandidateQuery {
  allGoogleSheet: {
    nodes: {
      candidates: {
        describeyourskills: string
        emailaddress: string
        firstname: string
        id: string
        jobtitle: string
        lastname: string
        linkedinorportfoliourl: string
        phonenumber: string
        resumelink: string
        skills: string
        timestamp: string
        typeofworkcontractorparttimefulltimegig: string
      }[]
    }[]
  }
}

export default () => {
  const data: CandidateQuery = useStaticQuery(graphql`
    query Candidates {
      allGoogleSheet {
        nodes {
          candidates {
            describeyourskills
            emailaddress
            firstname
            id
            jobtitle
            lastname
            linkedinorportfoliourl
            phonenumber
            resumelink
            skills
            timestamp
            typeofworkcontractorparttimefulltimegig
          }
        }
      }
    }
  `)
  const nodes = data.allGoogleSheet.nodes
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Job Seekers</h1>
          {nodes.map(n =>
            n.candidates.map(c => (
              <div key={c.id}>
                {c.firstname}
                <br />
                {c.id}
              </div>
            ))
          )}
        </Container>
      </Page>
    </IndexLayout>
  )
}
