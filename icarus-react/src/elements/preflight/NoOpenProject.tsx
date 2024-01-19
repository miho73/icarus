import LinkButton from "../fragments/button/LinkButton";

function NoOpenProject() {
  function createProject() {

  }

  return (
    <div className={'flex flex-col justify-center items-center min-h-[calc(100vh-45px)] gap-3'}>
      <p className={'text-5xl font-light'}>Icarus</p>

      <blockquote className={'font-serif italic max-w-[500px] text-center my-5'}>
        <p className={'my-1'}>Una volta che abbiate conosciuto il volo, camminerete sulla terra guardando il cielo, perché là siete stati e là desidererete tornare.</p>
        <p className={'my-1'}>Leonardo da Vinci</p>
      </blockquote>

      <LinkButton>Open project</LinkButton>
      <LinkButton onClick={createProject}>Create Project</LinkButton>
    </div>
  )
}

export default NoOpenProject;
