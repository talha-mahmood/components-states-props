import React from 'react'
import RepoItem from './RepoItem'

const Repos = ({repos}) => {
  return (
  repos.map(repo=><RepoItem repo={repo} key={re})
  )
}

export default Repos